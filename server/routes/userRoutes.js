const express = require("express");
const router = express.Router();
const { login, register,current,addFavorite,EmailVerified} = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler")


router.post("/register", register);

router.post("/login", login);

router.get("/current", validateToken,current);

router.post("/addFavorite", validateToken,addFavorite);

router.get('/verify-email/:emailToken', EmailVerified);


module.exports = router;
