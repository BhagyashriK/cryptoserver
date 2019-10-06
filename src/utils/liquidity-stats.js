const rp = require("request-promise");

const { API_ENDPOINT, API_KEY } = process.env;

const getLiquidityStats = ({ req, res }) => {
  const requestOptions = {
    method: "GET",
    uri: `${API_ENDPOINT}/listings/latest`,
    qs: {
      ...req.query,
      convert: "USD"
    },
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY
    },
    json: true,
    gzip: true
  };
  return rp(requestOptions)
    .then(response => {
      const data = response.data.map(coin => {
        let name = coin.name;
        let quote = coin.quote.USD;
        return {
          x: quote.market_cap,
          y: quote.volume_24h,
          z: quote.percent_change_24h,
          name
        };
      });
      return res.send({ ...response, data });
    })
    .catch(err => {
      res.status(err.statusCode);
      res.send(err.error.status);
    });
};

module.exports = getLiquidityStats;
