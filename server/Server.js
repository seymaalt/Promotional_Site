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
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, 
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
app.use(express.json());
app.use(bodyParser.json());

app.use("/content", contentRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
