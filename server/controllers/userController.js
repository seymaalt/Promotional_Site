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

  const confirmationLink = `http://localhost:${process.env.EMAIL_PORT}/user/verify-email/${emailToken}`;

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
});

const current = asyncHandler(async (req, res) => {
  res.json(req.user);
});

const addFavorite = asyncHandler(async (req, res) => {
  try {
    const { url, template } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    if (!user.favorities) {
      user.favorities = [];
    }

    user.favorities.push({ url, template });

    await User.findByIdAndUpdate(user.id, { favorities: user.favorities });

    res.json({ message: "Favori eklendi", favorities: user.favorities });
  } catch (error) {
    console.error("Hata:", error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

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
  
      res.status(200).send(`
        <html>
          <head>
            <title>Email Verification Successful</title>
          </head>
          <body style="text-align: center;">
            <h1>Email verification successful</h1>
            <p>Your email has been verified.</p>
            <button style="padding: 10px; background-color: #7247AE; color: white; border: none; border-radius: 5px;">
              <a href="${process.env.CLIENT_URL}" style="text-decoration: none; color: white;">Return to the application</a>
            </button>
          </body>
        </html>
      `);
    } else {
      res.status(404).send(`
        <html>
          <head>
            <title>Email Verification Failed</title>
          </head>
          <body style="text-align: center;">
            <h1>Email verification failed</h1>
            <p>Invalid token. Please check your email verification link.</p>
            <button style="padding: 10px; background-color: #7247AE; color: white; border: none; border-radius: 5px;">
              <a href="${process.env.CLIENT_URL}" style="text-decoration: none; color: white;">Return to the application</a>
            </button>
          </body>
        </html>
      `);
    }
  });
  
  
module.exports = {
  login,
  register,
  current,
  addFavorite,
  EmailVerified,
};
