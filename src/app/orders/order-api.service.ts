import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from './IOrder.model';

@Injectable({
  providedIn: 'root',
})
export class OrderAPIService {
  URL = 'https://macmickey.azurewebsites.net/Order';
  constructor(private http: HttpClient) {}

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.URL);
  }
}
