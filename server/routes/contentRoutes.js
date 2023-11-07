const express = require("express");
const routes = express.Router();
const {
    getContact
} = require("../controllers/contentController");


routes.route("/").post(getContact);

module.exports = routes;