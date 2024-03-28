require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDB = require('./server/config/db');

const app = express();

app.use(express.static("public"));

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("App listening on port ${PORT}");
});
