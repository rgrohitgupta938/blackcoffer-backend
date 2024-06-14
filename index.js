const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Company = require("./models/company");


const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Response-Time"
  );
  next();
});
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rgrohitgupta938:IFTXwpxf43QUhgQv@cluster0.kjmxozq.mongodb.net/"
  )
  .then((res) => {
    console.log(`Connected to mongo`);
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/add-company", async (req, res) => {
  try {
    const dataPath = path.join(__dirname, "data.json");
    const jsondata = fs.readFileSync(dataPath, "utf-8");

    const companies = JSON.parse(jsondata);

    await Company.insertMany(companies);
    res.status(200).send("Data uploaded success");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
    console.log(companies.filter((i) => i.intensity !== null).length);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching Data");
  }
});

app.listen(3000, () => {
  console.log("Lsitening on 3000");
});
