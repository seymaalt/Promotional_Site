const express = require("express");
const router = express.Router();
const { login, register,current} = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler")


router.post("/register", register);

router.post("/login", login);

router.get("/current", validateToken,current);

module.exports = router;
