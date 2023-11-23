const express = require("express");
const routes = express.Router();
const {
    getContact,
    getContactFAV
} = require("../controllers/contentController");


routes.route("/").post(getContact);

routes.route("/favorites").post(getContactFAV);

module.exports = routes;