const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json());

// DB connection
mongoose
  .connect("PASTE_YOUR_MONGODB_URI_HERE")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("MERN Todo API with DB connected");
});

// server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
