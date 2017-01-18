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
var product_1 = require('./product');
var product_service_1 = require('./product.service');
var common_1 = require('@angular/common');
var angular2_notifications_1 = require('angular2-notifications');
var ProductComponent = (function () {
    function ProductComponent(productService, _service, location) {
        this.productService = productService;
        this._service = _service;
        this.location = location;
        this.product = new product_1.Product();
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.add = function () {
        var _this = this;
        //Add component
        this.productService.addProduct(this.product)
            .then(function (message) {
            if (message === undefined) {
                _this._service.success("Item", 'Saved!');
            }
            else {
                for (var _i = 0, _a = message.Errors; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this._service.error('Item', item);
                }
            }
            //this.goBack();
        })
            .catch(function (error) { return console.log(error); });
    };
    ProductComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ma-product',
            templateUrl: 'product.component.html',
            providers: [product_service_1.ProductService, angular2_notifications_1.NotificationsService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, angular2_notifications_1.NotificationsService, common_1.Location])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map