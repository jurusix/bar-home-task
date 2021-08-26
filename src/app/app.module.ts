import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app.routing';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { TableComponent } from './components/table/table.component';
import { ConfigService } from './core/config/config.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExchangeRatesComponent } from './pages/exchange-rates/exchange-rates.component';
import { AddOrSubtractPipe } from './pipes/add-or-subtract.pipe';
import { ShellComponent } from './shell/shell/shell.component';

export function loadConfigFactory(config: ConfigService) {
  return () => config.init();
}

@NgModule({
  declarations: [
    ShellComponent,
    AddOrSubtractPipe,
    SimpleFormComponent,
    TableComponent,
    DashboardComponent,
    ExchangeRatesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigFactory,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [ShellComponent],
})
export class AppModule {}
