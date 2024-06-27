import { currencyConverterApi, TGetExchangeRateParams } from "../api/api";

export async function getExchangeRatesList(
  params: TGetExchangeRateParams[],
  controller?: AbortController,
) {
  const apiResponse = currencyConverterApi.getExchangeRates(params, controller);
  const responses = await apiResponse;
  const exchangeRatesList = responses.map((response, index) => {
    const from = params[index].from;
    const to = params[index].to;
    const key = `${from}-${to}`;

    const isSuccessfulResponse =
      response.status === "fulfilled" && typeof response.value === "number";
    const rate = isSuccessfulResponse ? response.value.toFixed(2) : "...";

    const listItem = { from, rate, key };

    return listItem;
  });

  return exchangeRatesList;
}
