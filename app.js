const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MainRoute = require("./routes/index.js");
const AuthRoute = require("./routes/auth.js");

dotenv.config();

const  {
  MONGO_USERNAME = 'admin',
  MONGO_PASSWORD = 'secret',
  MONGO_HOST = 'mongo',
  MONGO_PORT = 27017,
  MONGO_DATABASE = 'project'
} = process.env
//mongo DB
// mongoose.connect(
//   `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log(mongoose.connection.readyState)
// );
mongoose.connect(
  'mongodb://mongo:27017/project',
  { useNewUrlParser: true,useUnifiedTopology: true },
  () => console.log(mongoose.connection.readyState)
).catch(error => handleError(error));
 
 

//middleware 
app.use(express.json());
//routes
app.use("/", MainRoute);
app.use('/api',AuthRoute);

//listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
