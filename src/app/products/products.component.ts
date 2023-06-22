import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { IProducts } from './IProducts.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private product: APIService) {}

  ngOnInit() {
    this.displayProduct();
  }

  displayProduct() {
    this.product.getAllProducts().subscribe((product) => {
      this.products = product;
    });
  }
}
