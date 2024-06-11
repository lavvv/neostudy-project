import { useEffect, useState } from "react";

import { DEFAULT_REQUEST_PARAMS } from "@api/currencyConverter/options";
import { getExchangeRatesList } from "@components/CurrencyConverter/CurrencyConverterGetList";
import { convertMinutesToMs } from "@utils/convertMinutesToMs";
import "./CurrencyConverterList.scss";

type TCurrencyConverterListItem = {
  from: string;
  rate: string;
  key: string;
};

export function CurrencyConverterList({
  requestParams = DEFAULT_REQUEST_PARAMS,
  updateIntervalMinutes = 15,
}) {
  const updateIntervalMs = convertMinutesToMs(updateIntervalMinutes);
  const [exchangeRates, setExchangeRates] =
    useState<TCurrencyConverterListItem[]>();

  useEffect(() => {
    const controller = new AbortController();

    const setRates = function () {
      getExchangeRatesList(requestParams, controller)
        .then((rates: TCurrencyConverterListItem[]) => {
          return setExchangeRates([...rates]);
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
  }, [requestParams, updateIntervalMs]);

  return (
    <ul className="CurrencyConverterList">
      {exchangeRates
        ? exchangeRates.map(({ from, rate, key }) => (
            <li key={key}>
              <span className="CurrencyConverterList__currencyFrom">
                {from}:
              </span>
              {rate}
            </li>
          ))
        : "Loading..."}
    </ul>
  );
}
