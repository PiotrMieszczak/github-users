import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const AUTH_TOKEN = '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'; // valid till  May 30 2022

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${AUTH_TOKEN}`,
  }),
};

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get(environment.apiUrl + url, httpOptions);
  }
}
