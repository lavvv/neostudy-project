export const BASE_URL = "https://currency-exchange.p.rapidapi.com/";
export const ALL_CURRENCIES_URL = "listquotes";
export const EXCHANGE_RATE_URL = "exchange";
export const API_KEY = "1727e24cdbmsh37e1fcf2e9e5cf7p1724c2jsn6734c5d52f70";
export const API_HOST = "currency-exchange.p.rapidapi.com";
export const TIMEOUT = 4000;
export const HEADERS = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": API_HOST,
};

export const MONEY_QUANTITY = "1.0";
export const DEFAULT_UPDATE_INTERVAL = 15;
export const DEFAULT_PARAMS = [
  { fromCurrency: "USD", toCurrency: "RUB" },
  { fromCurrency: "EUR", toCurrency: "RUB" },
  { fromCurrency: "CNH", toCurrency: "RUB" },
  { fromCurrency: "JPY", toCurrency: "RUB" },
  { fromCurrency: "GBP", toCurrency: "RUB" },
  { fromCurrency: "SGD", toCurrency: "RUB" },
];
