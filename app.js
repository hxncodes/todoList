const express = require("express");
const res = require("express/lib/response");
const bodyParser = require("body-parser");

const app = express();

var items = [""];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started @ port 3000");
});
