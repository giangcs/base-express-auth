const express = require("express");

const {registerUser} = require('../controllers/user.controller.js');


const router = express.Router();

router.get("/alo", async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({ message: "This is register page" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
});


// Register
router.post("/register", registerUser);

module.exports = router;