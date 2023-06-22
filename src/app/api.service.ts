import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from './products/IProducts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  productsURL = 'https://macmickey.azurewebsites.net/Product';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.productsURL);
  }

  getProduct(id: number): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.productsURL}/${id}`);
  }
}
