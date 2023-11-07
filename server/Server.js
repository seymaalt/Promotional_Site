const express = require("express");
const bodyParser = require('body-parser');
const asyncHandler = require("express-async-handler");
const cors = require('cors')
const dotenv = require("dotenv").config();
const contentRoutes = require("./routes/contentRoutes")
const app = express();

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.json());

app.use("/content", contentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
