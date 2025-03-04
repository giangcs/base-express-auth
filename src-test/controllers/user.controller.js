const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    try {
        // const user = await User.create(req.body);

        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ username, password: hashedPassword });
        console.log(user)
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
};

module.exports = {
    registerUser
};