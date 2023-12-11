var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const searchText = req.query.text;
  let result = searchText ?? `please write some parems like http://localhost:3000/?text=some-text`;
  const regex = new RegExp(searchText, "i");
  const coll = mongoose.connection.collection("testcollection");
  if (searchText ?? false) {
    result = await coll.find({ callLetters: regex }).toArray();
    result = result.length === 0 ? "No data found try with some other text." : result;
  }

  result = JSON.stringify(result);

  // let data = await dataBaseConnection.testcollection.find();
  console.log(result);
  res.render("index", { title: result });
});

module.exports = router;
