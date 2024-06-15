export const BASE_URL = "https://currency-exchange.p.rapidapi.com/";
export const ALL_CURRENCIES_URL = "listquotes";
export const EXCHANGE_RATE_URL = "exchange";
export const TIMEOUT = 4000;
export const API_KEY = "1727e24cdbmsh37e1fcf2e9e5cf7p1724c2jsn6734c5d52f70";
export const API_HOST = "currency-exchange.p.rapidapi.com";
export const HEADERS = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": API_HOST,
};

export const DEFAULT_PARAMS = [
  { from: "USD", to: "RUB" },
  { from: "EUR", to: "RUB" },
  { from: "CNH", to: "RUB" },
  { from: "JPY", to: "RUB" },
  { from: "GBP", to: "RUB" },
  { from: "SGD", to: "RUB" },
];
