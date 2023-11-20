const express = require("express");
const bodyParser = require('body-parser');
const connectDb = require('./config/dbConnect');
const cors = require('cors')
const dotenv = require("dotenv").config();
const contentRoutes = require("./routes/contentRoutes");
const userRoutes = require("./routes/userRoutes");

connectDb();
const app = express();

// CORS ayarlarını güncelle
const corsOptions = {
  origin: 'http://localhost:5173', // İzin verilen etki alanı
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.json());
app.use("/content", contentRoutes);
app.use("/user", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
