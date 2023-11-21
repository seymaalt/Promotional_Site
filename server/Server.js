const express = require("express");
const bodyParser = require('body-parser');
const connectDb = require('./config/dbConnect');
const cors = require('cors')
const dotenv = require("dotenv").config();
const contentRoutes = require("./routes/contentRoutes");
const userRoutes = require("./routes/userRoutes");

connectDb();
const app = express();


app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use("/content", contentRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
