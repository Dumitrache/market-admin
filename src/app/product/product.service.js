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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var auth_service_1 = require('../auth/auth.service');
var ProductService = (function () {
    function ProductService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }
    ProductService.prototype.getProductsByName = function (producName) {
        var body = new http_1.URLSearchParams();
        body.set('action', 'GetProductListByName');
        body.set('ProductName', producName);
        //Este bun si asta
        //let bodyString = `action=GetProductListByName&input=+%22ProductName%22%3A%22${producName}%22`;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http
            .post(this.staticUrl, 
        //bodyString,
        body, options)
            .map(function (r) {
            console.log(r.json());
            return r.json();
        });
    };
    ProductService.prototype.addProduct = function (product) {
        var body = new http_1.URLSearchParams();
        body.set('action', 'AddANewProduct');
        body.set('ProductName', product.ProductName);
        body.set('ProductDescription', product.ProductDescription);
        body.set('UserId', this.authService.User.UserId.toString());
        //alert(JSON.stringify(product));
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http
            .post(this.staticUrl, 
        //bodyString,
        body, options).toPromise()
            .then(function (r) {
            if (r.text() == "")
                return undefined;
            return r.json();
        });
    };
    ProductService.prototype.addPriceStock = function (price) {
        var body = new http_1.URLSearchParams();
        body.set('action', 'AddANewPriceStock');
        body.set('location_id', price.LocationID.toString());
        body.set('product_id', price.ProductID.toString());
        body.set('Price', price.Price.toString());
        body.set('Stock', price.Stock.toString());
        body.set('UserId', this.authService.User.UserId.toString());
        //alert(JSON.stringify(product));
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http
            .post(this.staticUrl, 
        //bodyString,
        body, options).toPromise()
            .then(function (r) {
            if (r.text() == "")
                return undefined;
            return r.json();
        });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map