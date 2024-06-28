import { useEffect, useState } from "react";

import { Loader } from "@components/Loader/Loader";
import { convertMinutesToMs } from "@utils/convertMinutesToMs";

import { DEFAULT_PARAMS } from "../api/options";
import { getExchangeRatesList } from "../helpers/getExchangeRatesList";
import "./ExchangeRatesList.scss";

type ExchangeRatesList = {
  from: string;
  rate: string;
  key: string;
};

export function ExchangeRatesList({
  params = DEFAULT_PARAMS,
  updateIntervalMinutes = 15,
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
        exchangeRates.map(({ from, rate, key }) => (
          <li key={key}>
            <span className="ExchangeRatesList__currencyFrom">{from}:</span>
            {rate}
          </li>
        ))
      )}
    </ul>
  );
}
