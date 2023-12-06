const asyncHandler = require("express-async-handler");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const crypto = require("crypto");
const userModel = require("../models/userModel");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  secureConneciton: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: "Invalid email format" });
    throw new Error("Invalid email format");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400).json({ message: "User already registered" });
    throw new Error("User already registered");
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const emailToken = crypto.randomBytes(64).toString("hex");

  const user = await User.create({
    name,
    email,
    passwordHash: hashedPassword,
    passwordSalt: salt,
    emailToken: emailToken,
  });

  const confirmationLink = `${process.env.CLIENT_URL}verify-email/${emailToken}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Confirm your email",
    text: `Click on the following link to confirm your email: ${confirmationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending confirmation email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: `${user}`, emailVerificationSent: true });
    }
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });
  if (user.isVerified) {
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.name,
            email: user.email,
            id: user.id,
            favorities: user.favorities,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60m" }
      );
      res.status(200).json({ accessToken: accessToken, User: user });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  } else {
    res.status(401);
      throw new Error("Email account not confirmed");
  }
});

const current = asyncHandler(async (req, res) => {
  res.json(req.user);
});

const addFavorite = asyncHandler(async (req, res) => {
  try {
    const { url, template,header,logo } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    if (!user.favorities) {
      user.favorities = [];
    }

    user.favorities.push({ url, template,header,logo });

    await User.findByIdAndUpdate(user.id, { favorities: user.favorities });
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
          favorities: user.favorities,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60m" }
    );
    res.json({  favorities: user.favorities,accessToken: accessToken});
  } catch (error) {
    console.error("Hata:", error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});


const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.send({ Status: "User not exist" })
            }
            const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1d" })
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD
                }
            });

            var mailOptions = {
                from: process.env.EMAIL,
                to: `${email}`,
                subject: 'Reset Your Password',
                text: `http://localhost:5173/reset-password/${user._id}/${token}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    return  res.send("Success")
                }
            });
        })
});

const resetPassword = asyncHandler(async (req, res) => {
    const { id, token } = req.params
    const { password } = req.body
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
        if (err) {
            return res.json({ Status: "Error with token" })
        }
        else {
            bcrypt.hash(password, salt)
                .then(hash => {
                    User.findByIdAndUpdate({ _id: id }, {passwordSalt:salt, passwordHash: hash })
                    .then(u => res.send("Success"))
                    .catch(err => res.send({Status : err}))
                })
                .catch(err => res.send({Status : err}))
        }
    })

})

const EmailVerified = asyncHandler(async (req, res) => {
  let { emailToken } = req.params;

  emailToken = emailToken.trim();

  console.log("EmailToken from request:", emailToken);

  const user = await User.findOne({ emailToken });
  console.log(user);
  if (user) {
    console.log("User found in the database:", user);

    if (!user.isVerified) {
      user.isVerified = true;
    }

    await user.save();

    res.status(200).send(`Success`);
  } else {
    res.status(404).send(`failure`);
  }
});

module.exports = {
  login,
  forgotPassword,
  resetPassword,
  register,
  current,
  addFavorite,
  EmailVerified,
};
