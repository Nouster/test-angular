import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailedComponent } from './detailed/detailed.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: 'Products', component: ProductsComponent },
  { path: 'Detailed', component: DetailedComponent },
  { path: 'Clients', component: ClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
