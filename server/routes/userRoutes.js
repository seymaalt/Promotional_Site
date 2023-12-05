const express = require("express");
const router = express.Router();
const { login, register, forgotPassword,current,addFavorite, resetPassword} = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler")


router.post("/register", register);

router.post("/login", login);

router.post("/forgotPassword", forgotPassword);

router.post("/resetPassword/:id/:token", resetPassword);

router.get("/current", validateToken,current);

router.post("/addFavorite", validateToken,addFavorite);

module.exports = router;
