const express = require("express");
const res = require("express/lib/response");
const bodyParser = require("body-parser");
const getDate = require("./date");
const date = require(__dirname + "/date.js");

const app = express();

const items = [];
const workItems = [];
const studyItems = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else if (req.body.list === "Study") {
    studyItems.push(item);
    res.redirect("/study");
  } else {
    items.push(item);
    res.redirect("/");
  }
  console.log(req.body);
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/study", function (req, res) {
  res.render("list", { listTitle: "Study List", newListItems: studyItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started @ port 3000");
});
