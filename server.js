require("dotenv").config();
const express = require("express");
const { join, resolve } = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectMongo = require("connect-mongo");

//ROUTES VARIABLE
const session = require("express-session");

const rolesRouter = require("./routes/role");
const usersRouter = require("./routes/users");

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const app = express();
const port = process.env.PORT || 5000;
const MongoStore = connectMongo(session);

app.use(cors());
app.use(express.json());

// Middleware and stuff
app.use(morgan("dev"));
app.use(
  session({
    name: "cookie",
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 4,
      sameSite: true,
    },
  })
);

app.use("/role", rolesRouter);
app.use("/users", usersRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "./client/build")));
  app.get("*", (req, res) => {
    res.sendFile(resolve(__dirname, "./client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
