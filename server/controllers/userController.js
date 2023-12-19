const asyncHandler = require("express-async-handler");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const crypto = require("crypto");
const userModel = require("../models/userModel");
const nodemailer = require("nodemailer");
const { Logger, ErrorLogger } = require("../controllers/logger")

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
  Logger.log('info', ' --Kayıt olma işlemi başlatıldı.-- ')

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
    ErrorLogger.log('error', ' --Kayıtlı kullanıcı bulunmakta.-- ')
    res.json("User already registered");
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

  const confirmationLink = `${process.env.CLIENT_URL}user/verify-email/${emailToken}`;

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
      ErrorLogger.log('error', ' --Email gönderilirken hata oluştu!-- ')
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: `${user}`, emailVerificationSent: true });
      Logger.log('info', ' --Email başarıyla gönderildi.-- ')
    }
  });
});

const login = asyncHandler(async (req, res) => {

  Logger.log('info', ' --Üye girişi işlemi başlatıldı.-- ')
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.json("Wrong Email")
  }
  else if (user.isVerified) {
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
      Logger.log('info', ' --Kullanıcı başarıyla giriş yaptı.-- ')
    }
    else {
      ErrorLogger.log('error', ' --Giriş yapma işlemi başarısız!-- ')
      res.json("Password is incorrect")
    }
  }
  else 
  {
    res.json("Email not verified")
  }
});

const current = asyncHandler(async (req, res) => {
  res.json(req.user);
});

const addFavorite = asyncHandler(async (req, res) => {
  try {
    const { url, template, header, logo } = req.body;
    const user = req.user;

    if (!user) {
      ErrorLogger.log('error', ' --Favorilere ekleme sırasında kullanıcı bulunamadı!-- ')
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    if (!user.favorities) {
      user.favorities = [];
    }

    user.favorities.push({ url, template, header, logo });

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
    Logger.log('info', ' --Favorilere ekleme işlemi başarılı.-- ')
    res.json({ favorities: user.favorities, accessToken: accessToken });
  } catch (error) {
    console.error("Hata:", error.message);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});


const forgotPassword = asyncHandler(async (req, res) => {
  Logger.log('info', ' --Şifremi unuttum işlemi başlatıldı.-- ')
  const { email } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        ErrorLogger.log('error', ' --Kullanıcı bulunamadı!-- ')
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
          ErrorLogger.log('error', ' --Şifre yenileme Maili gönderilemedi!-- ')
          console.log(error);
        } else {
          Logger.log('info', ' --Şifre yenileme Maili başarıyla gönderildi.-- ')
          return res.send("Success")
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
      ErrorLogger.log('error', ' --Şifre yenileme işlemi başarısız!-- ')
      return res.json({ Status: "Error with token" })
    }
    else {
      Logger.log('info', ' --Şifre yenileme işlemi başarılı.-- ')
      bcrypt.hash(password, salt)
        .then(hash => {
          User.findByIdAndUpdate({ _id: id }, { passwordSalt: salt, passwordHash: hash })
            .then(u => res.send("Success"))
            .catch(err => res.send({ Status: err }))
        })
        .catch(err => res.send({ Status: err }))
    }
  })

})

const profile = asyncHandler(async (req, res) => {
  const { confirmPassword, oldPassword, userEmail } = req.body;
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const user = await User.findOne({ userEmail });

  if (await bcrypt.compare(oldPassword, user.passwordHash)) {
    bcrypt.hash(confirmPassword, salt)
      .then(hash => {
        User.findByIdAndUpdate({ _id: user.id }, { passwordSalt: salt, passwordHash: hash })
          .then(u => res.send("Success"))
          .catch(err => res.send({ Status: err }))
        Logger.log('info', ' --Şifre yenileme işlemi başarılı.-- ')
      })
      .catch(err => res.send({ Status: err }))
  }
  else {
    ErrorLogger.log('error', ' --Şifre yenileme işlemi başarısız!-- ')
    res.status(200).json('wrongOldPassword');
  }
}
)

const changeName = asyncHandler(async (req, res) => {
  const { name, user } = req.body;

  console.log(user)

  await User.findByIdAndUpdate({ _id: user.id }, { name: name })
  const accessToken = jwt.sign(
    {
      user: {
        username: name,
        email: user.email,
        id: user.id,
        favorities: user.favorities,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "60m" }
  );
  res.json({ accessToken: accessToken, message: "Success" })
  Logger.log('info', ' --İsim değiştirme işlemi başarılı.-- ')
}
)

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
    Logger.log('info', ' --Doğrulama maili gönderildi.-- ')
  } else {
    res.status(404).send(`failure`);
    ErrorLogger.log('error', ' --Doğrulama maili gönderilemedi!-- ')
  }
});

module.exports = {
  login,
  profile,
  changeName,
  forgotPassword,
  resetPassword,
  register,
  current,
  addFavorite,
  EmailVerified,
};
