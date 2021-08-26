import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Rates } from '../../models/rates.model';
import { ExchangeRatesService } from '../../services/exchange-rates.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleFormComponent implements OnInit {
  @Output() onFormSubmit: EventEmitter<Rates> = new EventEmitter();

  today = new Date();
  dateControl = new FormControl('', [Validators.required]);
  basicForm = this.fb.group({
    date: this.dateControl,
  });

  constructor(
    private fb: FormBuilder,
    private exRateService: ExchangeRatesService
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    this.exRateService
      .getLatestExchangeRatesByDate(this.dateControl.value)
      .subscribe((resp) => this.onFormSubmit.emit(resp.rates));
  }
}
