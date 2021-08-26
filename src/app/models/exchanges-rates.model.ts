import { BaseExchangeRates } from './base-exchange-rates.model';

export interface ExchangeRates extends BaseExchangeRates {
  historical: boolean;
}
