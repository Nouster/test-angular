import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from './client/IClient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientAPIService {
  URL = 'https://macmickey.azurewebsites.net/Client';

  constructor(private http: HttpClient) {}

  getClient(): Observable<IClient> {
    return this.http.get<IClient>(this.URL);
  }
}
