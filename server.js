const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src-test/config/db");
const authRoutes = require("./src-test/routes/auth.route");

dotenv.config();

const app = express();
connectDB().catch(err => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit process if DB connection fails
});

// Middleware
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded request bodies

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));