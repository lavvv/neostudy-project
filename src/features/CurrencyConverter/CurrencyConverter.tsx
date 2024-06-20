import Button from "@components/ui/Button";
import { TGetExchangeRateParams } from "./api/api";
import ExchangeRatesList from "./components/ExchangeRatesList";
import { getCurrentCityDate } from "./helpers/getCurrentCityDate";

import bankImg from "@img/home/bank.svg";
import "./CurrencyConverter.scss";

type TCurrencyConverterListProps = {
  params?: TGetExchangeRateParams[];
  updateIntervalMinutes?: number;
};

export default function CurrencyConverter({
  params,
  updateIntervalMinutes = 15,
}: TCurrencyConverterListProps) {
  const currentCityDate = getCurrentCityDate();

  return (
    <article className="CurrencyConverter">
      <section className="CurrencyConverter__header">
        <h2 className="CurrencyConverter__heading">
          Exchange rate in internet bank
        </h2>
        <p>
          Updates every {updateIntervalMinutes} minutes, {currentCityDate}
        </p>
      </section>

      <h3 className="CurrencyConverter__heading CurrencyConverter__heading--second">
        Currency
      </h3>
      <div className="CurrencyConverter__listContainer">
        <ExchangeRatesList
          params={params}
          updateIntervalMinutes={updateIntervalMinutes}
        />
        <figure className="CurrencyConverter__figure">
          <img className="CurrencyConverter__image" src={bankImg} alt="Bank" />
        </figure>
      </div>

      <Button className="Button CurrencyConverter__button">All courses</Button>
    </article>
  );
}
