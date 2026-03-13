const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__current_time, "index.html"));
});

app.listen(3000, () => {
  console.log("Server đang mở tại http://localhost:3000");
});
