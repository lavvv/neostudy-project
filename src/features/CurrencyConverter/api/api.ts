import { currencyConverterInstance } from "./instance";

import { ALL_CURRENCIES_URL, EXCHANGE_RATE_URL } from "./options";

export type TGetExchangeRateParams = {
  from: string;
  to: string;
  q?: string;
};

const getAllCurrencies = async function (controller?: AbortController) {
  const response = await currencyConverterInstance.get(ALL_CURRENCIES_URL, {
    signal: controller?.signal,
  });

  return response.data;
};

const getExchangeRate = async function (
  params: TGetExchangeRateParams,
  controller?: AbortController,
) {
  const { from, to, q = "1.0" } = params;
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
  params: TGetExchangeRateParams[],
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
