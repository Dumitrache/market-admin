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
var router_1 = require('@angular/router');
var location_component_1 = require('./location.component');
var location_datatable_component_1 = require('./location-datatable.component');
var routes = [
    { path: '', component: location_datatable_component_1.LocationDatatableComponent },
    { path: 'location', component: location_component_1.LocationComponent }
];
var LocationRoutingModule = (function () {
    function LocationRoutingModule() {
    }
    LocationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], LocationRoutingModule);
    return LocationRoutingModule;
}());
exports.LocationRoutingModule = LocationRoutingModule;
//# sourceMappingURL=location-routing.module.js.map