var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/api", function (req, res, next) {
 console.log("Hola mundo")
 res.status(200).json({ succes : true});
});

module.exports = router;
