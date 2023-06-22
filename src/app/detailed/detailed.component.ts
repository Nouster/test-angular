import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProducts } from '../products/IProducts.model';
import { APIService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css'],
})
export class DetailedComponent implements OnInit, OnDestroy {
  @Input() product: IProducts | undefined;

  productId: number = 1;
  private productSubscription: Subscription | undefined;

  constructor(private api: APIService) {}

  ngOnInit() {
    this.api.getProduct(this.productId).subscribe((product: IProducts) => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
