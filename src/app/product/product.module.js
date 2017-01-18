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
var product_component_1 = require('./product.component');
var product_datatable_component_1 = require('./product-datatable.component');
var product_detail_component_1 = require('./product-detail.component');
var product_service_1 = require('./product.service');
var product_routing_module_1 = require('./product-routing.module');
var angular2_notifications_1 = require('angular2-notifications');
var location_module_1 = require('../location/location.module');
var auth_service_1 = require('../auth/auth.service');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                product_routing_module_1.ProductRoutingModule,
                angular2_notifications_1.PushNotificationsModule,
                angular2_notifications_1.SimpleNotificationsModule,
                location_module_1.LocationModule
            ],
            exports: [],
            declarations: [product_component_1.ProductComponent, product_datatable_component_1.ProductDatatableComponent, product_detail_component_1.ProducDetailComponent],
            providers: [product_service_1.ProductService, auth_service_1.AuthService],
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map