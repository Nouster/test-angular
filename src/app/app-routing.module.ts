import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailedComponent } from './detailed/detailed.component';
import { ClientComponent } from './client/client.component';
import { FormComponent } from './form/form.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'Products', component: ProductsComponent },
  { path: 'Clients', component: ClientComponent },
  { path: 'Contact', component: FormComponent },
  { path: 'Orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
