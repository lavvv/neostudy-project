import { ALL_CURRENCIES_URL, EXCHANGE_RATE_URL, MONEY_QUANTITY } from "@constants/api/currency-converter";

import { ExchangeRate } from "../types";
import { currencyConverterInstance } from "./instance";

const getAllCurrencies = async function (controller?: AbortController) {
  const response = await currencyConverterInstance.get(ALL_CURRENCIES_URL, {
    signal: controller?.signal,
  });

  return response.data;
};

const getExchangeRate = async function (
  params: ExchangeRate,
  controller?: AbortController,
) {
  const {
    fromCurrency: from,
    toCurrency: to,
    quantity: q = MONEY_QUANTITY,
  } = params;
  const response = await currencyConverterInstance.get(EXCHANGE_RATE_URL, {
    signal: controller?.signal,
    params: {
      from,
      to,
      q,
    },
  });

  return response.data;
};

const getExchangeRates = function (
  params: ExchangeRate[],
  controller?: AbortController,
) {
  return Promise.allSettled(
    params.map((param) => getExchangeRate(param, controller)),
  );
};

export const currencyConverterApi = {
  getAllCurrencies,
  getExchangeRate,
  getExchangeRates,
};
