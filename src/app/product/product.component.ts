import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'ma-product',
    templateUrl: 'product.component.html',
    providers: [ProductService, NotificationsService]
})
export class ProductComponent implements OnInit {

    public product: Product;
    public options: any;

    constructor(private productService: ProductService,
        private _service: NotificationsService,
        private location: Location) {
        this.product = new Product();
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
    }

    ngOnInit() {

    }

    public add() {
        //Add component
        this.productService.addProduct(this.product)
            .then(message => {
                if (message === undefined) {
                    this._service.success("Item", 'Saved!');                    
                } else {
                    for(let item of message.Errors){
                        this._service.error('Item', item);
                    }
                }
                //this.goBack();
            })
            .catch(error => console.log(error));
    }

    goBack(): void {
        this.location.back();
    }
}