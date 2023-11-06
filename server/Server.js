const express = require("express");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();
const contentRoutes = require("./routes/contentRoutes")
const app = express();

app.use(express.json());


app.use("/content",contentRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
