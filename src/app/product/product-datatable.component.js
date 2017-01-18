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
var product_service_1 = require('./product.service');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var ProductDatatableComponent = (function () {
    function ProductDatatableComponent(productService) {
        this.productService = productService;
        this.searchTerms = new Subject_1.Subject();
        this.isSearchFirst = false;
        this.isDetailsShown = false;
    }
    ProductDatatableComponent.prototype.selectProduct = function (item) {
        if (item === this.selectedProduct) {
            this.selectedProduct = undefined;
        }
        else {
            this.selectedProduct = item;
        }
    };
    ProductDatatableComponent.prototype.toggleDetails = function (item) {
        this.selectedProduct = item;
        this.isDetailsShown = true;
        // if (this.selectedProduct !== undefined && this.isDetailsShown === false) {
        //     this.isDetailsShown = true;
        // }
        // else {
        //     this.isDetailsShown = false;
        //     this.selectedProduct = undefined;
        // }
    };
    ProductDatatableComponent.prototype.onVisible = function (visible) {
        this.isDetailsShown = !visible;
    };
    /**
     * search
     */
    ProductDatatableComponent.prototype.search = function (term) {
        var _this = this;
        if (this.isSearchFirst == false) {
            this.products = this.searchTerms.debounceTime(300).distinctUntilChanged()
                .switchMap(function (term) { return term ? _this.productService.getProductsByName(term) : _this.productService.getProductsByName(""); })
                .catch(function (error) {
                // TODO: real error handling
                console.log(error);
                return Observable_1.Observable.of([]);
            });
            this.isSearchFirst = true;
        }
        this.searchTerms.next(term);
    };
    ProductDatatableComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProductsByName("")
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
        // this.products = this.searchTerms.debounceTime(300).distinctUntilChanged()
        //     .switchMap(term => term ? this.productService.GetProductsByName(term) :  this.productService.GetProductsByName(""))
        //     .catch(error => {
        //         // TODO: real error handling
        //         console.log(error);
        //         return Observable.of<Product[]>([]);
        //     });
    };
    ProductDatatableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-datatable',
            templateUrl: 'product-datatable.component.html',
            providers: [product_service_1.ProductService],
            styles: ["tbody tr.selected {\n        background-color: #C0C0C0;\n    }"]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductDatatableComponent);
    return ProductDatatableComponent;
}());
exports.ProductDatatableComponent = ProductDatatableComponent;
//# sourceMappingURL=product-datatable.component.js.map