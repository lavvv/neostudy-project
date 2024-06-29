export type ExchangeRate = {
  fromCurrency: string;
  toCurrency: string;
  quantity?: string;
};

export type ExchangeRatesList = {
  fromCurrency: string;
  rate: string;
  key: string;
};

export type CurrencyConverterProps = {
  params?: ExchangeRate[];
  updateIntervalMinutes?: number;
};
