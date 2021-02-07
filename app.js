const express = require("express");
const functions = require("./functions");
const port = 3000;
const app = express();
const path = require("path");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("index", {
    title: "Zajęcia 07.02.2021",
    subTitle: functions.subTitle,
  });
});

app.get("/about", function (req, res) {
  res.send("My site");
});
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Apka działa na porcie ${port}`);
});
