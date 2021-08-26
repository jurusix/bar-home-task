import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  get<T>(path: string): Observable<T> {
    const config = this.config.appConfig;
    const params = new HttpParams()
      .set(config.accessKeyParam, config.accessKey)
      .set(config.symbolsParam, config.symbols.join());

    return this.http.get<T>(`${config.apiUrl}${path}`, { params });
  }
}
