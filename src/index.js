const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({
    message: "Jesus te ama"
  })
);

app.listen(80);
