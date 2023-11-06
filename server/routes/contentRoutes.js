const express = require("express");
const routes = express.Router();
const {
    getContact
} = require("../controllers/contentController");


routes.route("/:id").get(getContact);

module.exports = routes;