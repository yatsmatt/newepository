const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api", (req, res) => {
  fs.readFile("./Server/Data.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
