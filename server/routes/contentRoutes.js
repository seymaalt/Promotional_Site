const express = require("express");
const routes = express.Router();
const {
    getContact,
    getContactFAV,
    TempData,
    publishTemp1
} = require("../controllers/contentController");


routes.route("/").post(getContact);

routes.route("/favorites").post(getContactFAV);

routes.route("/TempData").post(TempData);

routes.route('/publishTemp1/:publishToken').post(publishTemp1);

module.exports = routes;