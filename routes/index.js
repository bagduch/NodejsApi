const router = require("express").Router();


router.get("/", (req, res) => {
  res.send("welcome here!testd");  
});

module.exports=router