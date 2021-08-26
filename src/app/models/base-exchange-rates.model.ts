import { Rates } from './rates.model';

export interface BaseExchangeRates {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}
