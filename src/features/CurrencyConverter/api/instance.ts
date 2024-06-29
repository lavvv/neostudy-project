import axios from "axios";

import { BASE_URL, HEADERS, TIMEOUT } from "@constants/api/currency-converter";

export const currencyConverterInstance = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
  timeout: TIMEOUT,
});
