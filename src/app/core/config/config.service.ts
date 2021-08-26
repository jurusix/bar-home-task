import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config.model';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config?: Config;

  constructor(private httpClient: HttpClient) {}

  init(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Config>('/assets/config.json').subscribe(
        (config) => {
          this.config = config;
          resolve();
        },
        () => reject()
      );
    });
  }

  get appConfig(): Config {
    return this.config!;
  }
}
