const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MainRoute = require("./routes/index.js");
const AuthRoute = require("./routes/auth.js");

dotenv.config();

const DBCONNTECT = process.env.DB_CONNECTED;
//mongo DB
mongoose.connect(
  DBCONNTECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`connected to db!`)
);

//middleware 
app.use(express.json());
//routes
app.use("/", MainRoute);
app.use('/api',AuthRoute);

//listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
//mongodb+srv://dbuser:<password>@api-rxcgo.mongodb.net/test?retryWrites=true&w=majority
