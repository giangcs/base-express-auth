const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from Express.js Backend!" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});