const path = require("path");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const getCurrencyListing = require("./utils/market-overview");
const getLiquidityStats = require("./utils/liquidity-stats");

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/coins", (req, res) => {
  getCurrencyListing({ req, res });
});

app.get("/liquiditystats", (req, res) => {
  getLiquidityStats({ req, res });
});

app.listen(port, () => {
  console.log("Server is up on port", port);
});
