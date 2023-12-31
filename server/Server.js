const express = require("express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const connectDb = require("./config/dbConnect");
const cors = require("cors");
const dotenv = require("dotenv").config();
const passportSetUp = require("./config/passport");
const contentRoutes = require("./routes/contentRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");

connectDb();

const app = express();

app.use(
  session({
    secret: "cyberwolve",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000,
  
   },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
//`${process.env.PORT}`)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); //sunucuda bu çalışmaz!!!
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());
app.use(bodyParser.json());

app.use("/content", contentRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Health check passed' });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
