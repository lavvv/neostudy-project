import { useEffect, useState } from "react";

import { DEFAULT_PARAMS } from "../api/options";
import { convertMinutesToMs } from "../helpers/convertMinutesToMs";
import { getExchangeRatesList } from "../helpers/getExchangeRatesList";

import "./ExchangeRatesList.scss";

type TCurrencyConverterListItem = {
  from: string;
  rate: string;
  key: string;
};

export default function ExchangeRatesList({
  params = DEFAULT_PARAMS,
  updateIntervalMinutes = 15,
}) {
  const [exchangeRates, setExchangeRates] =
    useState<TCurrencyConverterListItem[]>();
  const updateIntervalMs = convertMinutesToMs(updateIntervalMinutes);

  useEffect(() => {
    const controller = new AbortController();

    const setRates = function () {
      getExchangeRatesList(params, controller)
        .then((rates: TCurrencyConverterListItem[]) => {
          if (!controller.signal.aborted) {
            return setExchangeRates([...rates]);
          }
        })
        .catch((error) => console.error(error));
    };

    setRates();

    const listUpdateIntervalId = setInterval(() => {
      setRates();
    }, updateIntervalMs);

    return () => {
      controller.abort();
      clearInterval(listUpdateIntervalId);
    };
  }, [params, updateIntervalMs]);

  return (
    <ul className="ExchangeRatesList">
      {exchangeRates
        ? exchangeRates.map(({ from, rate, key }) => (
            <li key={key}>
              <span className="ExchangeRatesList__currencyFrom">{from}:</span>
              {rate}
            </li>
          ))
        : "Loading..."}
    </ul>
  );
}