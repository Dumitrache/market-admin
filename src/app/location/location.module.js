"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var location_component_1 = require('./location.component');
var location_datatable_component_1 = require('./location-datatable.component');
var location_routing_module_1 = require('./location-routing.module');
var location_service_1 = require('./location.service');
var angular2_notifications_1 = require('angular2-notifications');
var LocationModule = (function () {
    function LocationModule() {
    }
    LocationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                location_routing_module_1.LocationRoutingModule,
                angular2_notifications_1.PushNotificationsModule,
                angular2_notifications_1.SimpleNotificationsModule
            ],
            exports: [location_datatable_component_1.LocationDatatableComponent],
            declarations: [location_component_1.LocationComponent, location_datatable_component_1.LocationDatatableComponent],
            providers: [location_service_1.LocationService],
        }), 
        __metadata('design:paramtypes', [])
    ], LocationModule);
    return LocationModule;
}());
exports.LocationModule = LocationModule;
//# sourceMappingURL=location.module.js.map