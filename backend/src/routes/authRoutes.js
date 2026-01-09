const express = require("express");
const router = express.router();

const{login,register} = require("../controllers/authControllers");

router.post("/register",register);
router.post("/login",login);

module.exports = router;
