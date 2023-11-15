const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const connectDb = asyncHandler(async () => {
 try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
        "Database connected:",
        connect.connection.host,
        connect.connection.name
    )
 } catch (error) {
    console.log(error);
    process.exit(1);
 }
});

module.exports = connectDb;