import { useTranslation } from "react-i18next";

import { Button } from "@components/ui/Button";
import bankImg from "@img/home/bank.svg";

import "./CurrencyConverter.scss";
import { TGetExchangeRateParams } from "./api/api";
import { ExchangeRatesList } from "./components/ExchangeRatesList";
import { getCurrentLocationDate } from "./helpers/getCurrentLocationDate";

type TCurrencyConverterListProps = {
  params?: TGetExchangeRateParams[];
  updateIntervalMinutes?: number;
};

export function CurrencyConverter({
  params,
  updateIntervalMinutes = 15,
}: TCurrencyConverterListProps) {
  const { t } = useTranslation();
  const currentCityDate = getCurrentLocationDate();

  return (
    <article className="CurrencyConverter">
      <section className="CurrencyConverter__header">
        <h2 className="CurrencyConverter__heading">
          {t("currencyConverter.heading")}
        </h2>
        <p>
          {t("currencyConverter.update", { count: updateIntervalMinutes })}
          {currentCityDate}
        </p>
      </section>

      <h3 className="CurrencyConverter__heading CurrencyConverter__heading--second">
        {t("currencyConverter.currency")}
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

      <Button className="Button CurrencyConverter__button">
        {t("currencyConverter.allCoursesBtn")}
      </Button>
    </article>
  );
}
