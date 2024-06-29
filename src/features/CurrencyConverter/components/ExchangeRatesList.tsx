import { useEffect, useState } from "react";

import { Loader } from "@components/Loader/Loader";
import {
  DEFAULT_PARAMS,
  DEFAULT_UPDATE_INTERVAL,
} from "@constants/api/currency-converter";
import { convertMinutesToMs } from "@utils/convertMinutesToMs";

import { getExchangeRatesList } from "../helpers/getExchangeRatesList";
import type { ExchangeRatesList } from "../types";
import "./ExchangeRatesList.scss";

export function ExchangeRatesList({
  params = DEFAULT_PARAMS,
  updateIntervalMinutes = DEFAULT_UPDATE_INTERVAL,
}) {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRatesList[]>();
  const updateIntervalMs = convertMinutesToMs(updateIntervalMinutes);

  useEffect(() => {
    const controller = new AbortController();
    const setRates = async function () {
      try {
        const rates = await getExchangeRatesList(params, controller);
        if (!controller.signal.aborted) {
          setExchangeRates([...rates]);
        }
      } catch (error) {
        console.error(error);
      }
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
      {!exchangeRates ? (
        <Loader height="3.5rem" />
      ) : (
        exchangeRates.map(({ fromCurrency, rate, key }) => (
          <li key={key}>
            <span className="ExchangeRatesList__currencyFrom">
              {fromCurrency}:
            </span>
            {rate}
          </li>
        ))
      )}
    </ul>
  );
}
