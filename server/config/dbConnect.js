const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const connectDb = asyncHandler(async () => {
   try {
      const connect = await mongoose.connect(process.env.CONNECTION_STRING);
   } catch (error) {
      process.exit(1);
   }
});

module.exports = connectDb;