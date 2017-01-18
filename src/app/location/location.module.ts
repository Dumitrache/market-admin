import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocationComponent } from './location.component';
import { LocationDatatableComponent } from './location-datatable.component';

import { LocationRoutingModule } from './location-routing.module';

import { LocationService } from './location.service';

import { PushNotificationsModule, SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LocationRoutingModule,
        PushNotificationsModule,
        SimpleNotificationsModule
    ],
    exports: [LocationDatatableComponent],
    declarations: [LocationComponent, LocationDatatableComponent],
    providers: [LocationService],
})
export class LocationModule { }
