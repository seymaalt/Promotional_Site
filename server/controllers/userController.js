const asyncHandler = require("express-async-handler");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
const nodemailer = require("nodemailer")

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);



    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        name,
        email,
        passwordHash: hashedPassword,
        passwordSalt: salt
    });


    res.json({ message: `${user}` });
});

const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
        const accessToken = jwt.sign({
            user: {
                username: user.name,
                email: user.email,
                id: user.id,
                favorities: user.favorities
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
                    user: 'krgn.bayram@gmail.com',
                    pass: 'fynneymqctipfyyg'
                }
            });

            var mailOptions = {
                from: 'krgn.bayram@gmail.com',
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

const current = asyncHandler(async (req, res) => {
    res.json(req.user);
});
const addFavorite = asyncHandler(async (req, res) => {
    try {
        const { url, template } = req.body;
        const user = req.user;

        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }

        if (!user.favorities) {
            user.favorities = [];
        }

        user.favorities.push({ url, template });

        await User.findByIdAndUpdate(user.id, { favorities: user.favorities });

        res.json({ message: 'Favori eklendi', favorities: user.favorities });
    } catch (error) {
        console.error('Hata:', error.message);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
});
module.exports = {
    login,
    forgotPassword,
    resetPassword,
    register,
    current,
    addFavorite
};