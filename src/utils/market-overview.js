const rp = require("request-promise");

const { API_ENDPOINT, API_KEY } = process.env;

const getCurrencyListing = ({ req, res }) => {
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
      return res.send(response);
    })
    .catch(err => {
      res.status(err.statusCode);
      res.send(err.error.status);
    });
};

module.exports = getCurrencyListing;
