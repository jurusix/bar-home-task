import { Injectable } from '@angular/core';
import { ApiService } from '../core/api/api.service';
import { BaseExchangeRates } from '../models/base-exchange-rates.model';
import { ExchangeRates } from '../models/exchanges-rates.model';

@Injectable({ providedIn: 'root' })
export class ExchangeRatesService {
  constructor(private api: ApiService) {}

  getLatestExchangeRates() {
    return this.api.get<BaseExchangeRates>('latest');
  }

  getLatestExchangeRatesByDate(date: string) {
    return this.api.get<ExchangeRates>(date);
  }
}
