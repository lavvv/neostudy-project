import { currencyConverterInstance } from "./instance";
import { TCurrencyConverterRequest } from "./types";

const getExchangeRate = function (
  { from, to, q = "1.0" }: TCurrencyConverterRequest,
  controller: AbortController,
) {
  return currencyConverterInstance.get("", {
    signal: controller.signal,
    params: {
      from,
      to,
      q,
    },
  });
};

const getExchangeRatesData = function (
  currencies: TCurrencyConverterRequest[],
  controller: AbortController,
) {
  const promises = currencies.map(({ from, to }) =>
    getExchangeRate({ from, to }, controller),
  );

  return Promise.allSettled(promises);
};

export const currencyConverterApi = {
  getExchangeRatesData,
};
