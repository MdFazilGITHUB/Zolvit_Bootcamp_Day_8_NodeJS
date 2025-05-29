require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const User = require("./userModel");

const app = express();
app.use(express.json());

connectDB();

app.post("/add", async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
