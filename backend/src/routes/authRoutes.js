const express = require("express");
const router = express.Router();
const {body} = require("express-validator");

const{login,register} = require("../controllers/authControllers");

router.post("/register",
    [
        body("name").isEmpty(),
        body("email").isEmail(),
        body("password").isLength({min:6})
    ],
    register);
router.post("/login",login);

module.exports = router;
