import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductDatatableComponent } from './product-datatable.component';
import { ProducDetailComponent } from './product-detail.component';

import { ProductService } from './product.service';

import { ProductRoutingModule } from './product-routing.module';

import { PushNotificationsModule, SimpleNotificationsModule } from 'angular2-notifications';

import { LocationModule } from '../location/location.module';
import { AuthService } from '../auth/auth.service';
import { LocationService } from '../location/location.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule,
        PushNotificationsModule,
        SimpleNotificationsModule,
        LocationModule
    ],
    exports: [],
    declarations: [ProductComponent, ProductDatatableComponent, ProducDetailComponent],
    providers: [ProductService, AuthService],
})
export class ProductModule { }
