import { currencyConverterApi, TGetExchangeRateParams } from "../api/api";

export function getExchangeRatesList(
  params: TGetExchangeRateParams[],
  controller?: AbortController,
) {
  const apiResponse = currencyConverterApi.getExchangeRates(params, controller);

  return apiResponse.then((responses) => {
    const exchangeRatesList = responses.map((response, index) => {
      const from = params[index].from;
      const to = params[index].to;
      const key = `${from}-${to}`;

      const isSuccessfulResponse =
        response.status === "fulfilled" && typeof response.value === "number";
      const rate = isSuccessfulResponse ? response.value.toFixed(2) : "...";

      return { from, rate, key };
    });

    return exchangeRatesList;
  });
}
