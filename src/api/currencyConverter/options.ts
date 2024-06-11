const BASE_URL = "https://currency-exchange.p.rapidapi.com/exchange";
const TIMEOUT = 4000;
const HEADERS = {
  "x-rapidapi-key": "1727e24cdbmsh37e1fcf2e9e5cf7p1724c2jsn6734c5d52f70",
  "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
};

const DEFAULT_REQUEST_PARAMS = [
  { from: "USD", to: "RUB" },
  { from: "EUR", to: "RUB" },
  { from: "CNH", to: "RUB" },
  { from: "JPY", to: "RUB" },
  { from: "GBP", to: "RUB" },
  { from: "SGD", to: "RUB" },
];

export { BASE_URL, DEFAULT_REQUEST_PARAMS, HEADERS, TIMEOUT };
