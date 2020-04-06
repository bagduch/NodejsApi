const router = require("express").Router();


router.get("/", (req, res) => {
  console.log("here");
  res.send("welcome here!12 13123123");  
});

module.exports=router