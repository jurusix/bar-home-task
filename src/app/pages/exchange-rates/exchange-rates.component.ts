import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Rates } from '../../models/rates.model';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRatesComponent {
  rates?: Rates;

  onSubmit(rates: Rates): void {
    this.rates = rates;
  }
}
