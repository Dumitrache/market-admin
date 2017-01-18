import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';
import { LocationDatatableComponent } from './location-datatable.component';

const routes: Routes = [
  { path: '', component: LocationDatatableComponent },
  { path: 'location', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule { }
