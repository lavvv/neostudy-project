import { TCurrencyConverterRequest } from "@api/currencyConverter/types";
import Button from "@components/ui/Button";
import { getCurrentDate } from "@utils/getCurrentDate";
import { CurrencyConverterList } from "./CurrencyConverterList";

import bankImage from "@assets/images/Index/bank.svg";
import "./CurrencyConverter.scss";

type TCurrencyConverterListProps = {
  requestParams?: TCurrencyConverterRequest[];
  updateIntervalMinutes?: number;
};

export default function CurrencyConverter({
  requestParams,
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

      <section className="CurrencyConverter__list">
        <h3 className="CurrencyConverter__heading CurrencyConverter__heading--second">
          Currency
        </h3>
        <div className="CurrencyConverter__container">
          <CurrencyConverterList
            requestParams={requestParams}
            updateIntervalMinutes={updateIntervalMinutes}
          />
          <figure className="CurrencyConverter__figure">
            <img
              className="CurrencyConverter__image"
              src={bankImage}
              alt="Bank"
            />
          </figure>
        </div>
      </section>

      <Button classes="Button CurrencyConverter__button">All courses</Button>
    </article>
  );
}
