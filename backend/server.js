const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json());

// DB connection
mongoose
  .connect("mongodb+srv://yadavamitsingh4201_db_user:U4oLlzAVu1BTPFlX@cluster0.va4rwdx.mongodb.net/todoDB")
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
