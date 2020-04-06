const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MainRoute = require("./routes/index.js");
const AuthRoute = require("./routes/auth.js");
const { isLogin } = require("./middleware/auth");
dotenv.config();

const {
  MONGO_USERNAME = "user",
  MONGO_PASSWORD = "secret",
  MONGO_HOST = "mongo",
  MONGO_PORT = 27017,
  MONGO_DATABASE = "project",
  MONGO_ROOT_USERNAME = "root",
  MONGO_ROOT_PASSWORD = "secret",
} = process.env;
//mongo DB
mongoose.connect(
  `mongodb://${MONGO_ROOT_USERNAME}:${MONGO_ROOT_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(mongoose.connection.readyState)
);

//middleware
app.use(express.json());
//routes
app.use("/dash", isLogin, MainRoute);
app.use("/api", AuthRoute);

//listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
