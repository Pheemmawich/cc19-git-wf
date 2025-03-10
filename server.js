const express = require("express");
const app = express();

app.post("/api/register", (req, res, next) =>
  res.json({ mes: "hello register" })
);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server on port", port));
