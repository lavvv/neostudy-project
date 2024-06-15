import {
  currencyConverterApi,
  TGetExchangeRateParams,
} from "@api/currencyConverter/api";

export function getExchangeRatesList(
  params: TGetExchangeRateParams[],
  controller: AbortController,
) {
  const apiResponse = currencyConverterApi.getExchangeRates(params, controller);

  return apiResponse.then((responses) => {
    const list = responses.map((response, index) => {
      const from = params[index].from;
      const to = params[index].to;
      const key = `${from}-${to}`;

      const isValidResponse =
        response.status === "fulfilled" &&
        typeof response.value.data === "number";
      const rate = isValidResponse ? response.value.data.toFixed(2) : "...";

      return { from, rate, key };
    });

    return list;
  });
}
