const express = require("express");
const routes = express.Router();
const {
    getContact,
    getContactFAV,
    TempData,
    publishTemp1,
    publishTemp2
} = require("../controllers/contentController");


routes.route("/").post(getContact);

routes.route("/favorites").post(getContactFAV);

routes.route("/TempData/:tempNo").post(TempData);

routes.route('/publishTemp1/:publishToken').post(publishTemp1);
routes.route('/publishTemp2/:publishToken').post(publishTemp2);
module.exports = routes;