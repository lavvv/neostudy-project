import { currencyConverterApi } from "../api/api";
import type { ExchangeRate } from "../types";

export async function getExchangeRatesList(
  params: ExchangeRate[],
  controller?: AbortController,
) {
  const apiResponse = currencyConverterApi.getExchangeRates(params, controller);
  const responses = await apiResponse;
  const exchangeRatesList = responses.map((response, index) => {
    const fromCurrency = params[index].fromCurrency;
    const toCurrency = params[index].toCurrency;
    const key = `${fromCurrency}-${toCurrency}`;

    const isSuccessfulResponse =
      response.status === "fulfilled" && typeof response.value === "number";
    const rate = isSuccessfulResponse ? response.value.toFixed(2) : "...";

    const listItem = { fromCurrency, rate, key };

    return listItem;
  });

  return exchangeRatesList;
}
