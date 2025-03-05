const express = require("express");
const dbConnection = require("./config/database");
const morgan = require("morgan");
const dotenv = require("dotenv");
const categoryroute = require("./routes/categoryroute");
dotenv.config({ path: "./config.env" });

dbConnection();
const app = express();
app.use(morgan("dev"));

app.use(express.json());

// Routes
app.use("/api/v1/categories", categoryroute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
