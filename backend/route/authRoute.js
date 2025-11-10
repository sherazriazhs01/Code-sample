console.log("🎯route js loaded");
const { signup, login } = require("../controllers/Usercontrollers");
const express = require("express");
const router = express.Router();

// api create kr rahe hain yaha
router.post("/signup", signup);
router.post("/login", login);
//app.post("/login", blog);

module.exports = router;
