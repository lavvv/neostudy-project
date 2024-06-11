import { currencyConverterApi } from "@api/currencyConverter/api";
import { TCurrencyConverterRequest } from "@api/currencyConverter/types";

export function getExchangeRatesList(
  requestParams: TCurrencyConverterRequest[],
  controller: AbortController,
) {
  return currencyConverterApi
    .getExchangeRatesData(requestParams, controller)
    .then((responses) => {
      return responses.map((response, index) => {
        const from = requestParams[index].from;
        const to = requestParams[index].to;
        const key = `${from}-${to}`;
        const rate =
          response.status === "fulfilled" &&
          typeof response.value.data === "number"
            ? response.value.data.toFixed(2)
            : "...";

        return { from, rate, key };
      });
    });
}
