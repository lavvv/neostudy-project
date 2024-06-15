import { TGetExchangeRateParams } from "@api/currencyConverter/api";
import Button from "@components/ui/Button";
import { getCurrentDate } from "@utils/getCurrentDate";
import ExchangeRatesList from "./components/ExchangeRatesList";

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
  const currentDate = getCurrentDate();

  return (
    <article className="CurrencyConverter">
      <section className="CurrencyConverter__header">
        <h2 className="CurrencyConverter__heading">
          Exchange rate in internet bank
        </h2>
        <p>
          Updates every {updateIntervalMinutes} minutes, {currentDate}
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

      <Button classes="Button CurrencyConverter__button">All courses</Button>
    </article>
  );
}
