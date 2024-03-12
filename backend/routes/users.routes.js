const express = require("express");
const { signUp, logIn} = require("../controllers/users.controllers")

const router = express.Router();

router.post("/signup", signUp);
router.get("/login", logIn);

module.exports = router;
