const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  const query = req.query;
  if (query.message && query.name)
    return res.send(`Hello ${query.name}! ${query.message}!`);
  res.send("No query");
});

app.listen(PORT);
