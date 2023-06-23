import { Component, OnInit } from '@angular/core';
import { OrderAPIService } from './order-api.service';
import { IOrder } from './IOrder.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Array<IOrder> = [];
  constructor(private order: OrderAPIService) {}

  ngOnInit(): void {
    this.displayOrder();
  }

  displayOrder() {
    this.order.getOrders().subscribe((order) => {
      this.orders = order;
    });
  }
}
