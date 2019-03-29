const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.type(".html");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/biudzetas", function(req, res) {
  res.type("html");
  res.sendfile(path.join(__dirname + "/biudzetas.html"));
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Example app listening on port 5000!")
);
