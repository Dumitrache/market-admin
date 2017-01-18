import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent }   from './product.component';
import { ProductDatatableComponent } from './product-datatable.component';

const routes: Routes = [
  { path: '', component: ProductDatatableComponent, pathMatch: 'full'},
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }