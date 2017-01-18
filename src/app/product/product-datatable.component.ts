import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'product-datatable',
    templateUrl: 'product-datatable.component.html',
    providers: [ProductService],
    styles: [`tbody tr.selected {
        background-color: #C0C0C0;
    }`]
})
export class ProductDatatableComponent implements OnInit {

    public products: Observable<Product[]>;
    private searchTerms: Subject<string>;
    private isSearchFirst: boolean;
    public isDetailsShown: boolean;
    public selectedProduct: Product;

    constructor(private productService: ProductService) {
        this.searchTerms = new Subject<string>();
        this.isSearchFirst = false;
        this.isDetailsShown = false;
    }

    selectProduct(item: Product) {
        if (item === this.selectedProduct) {
            this.selectedProduct = undefined;
        }
        else {
            this.selectedProduct = item;
        }
    }

    toggleDetails(item: Product) {
        this.selectedProduct = item;
        this.isDetailsShown = true;
        // if (this.selectedProduct !== undefined && this.isDetailsShown === false) {
        //     this.isDetailsShown = true;
        // }
        // else {
        //     this.isDetailsShown = false;
        //     this.selectedProduct = undefined;
        // }
    }

    onVisible(visible: boolean){
        this.isDetailsShown = !visible;
    }

    /**
     * search
     */
    public search(term: string) {

        if (this.isSearchFirst == false) {
            this.products = this.searchTerms.debounceTime(300).distinctUntilChanged()
                .switchMap(term => term ? this.productService.getProductsByName(term) : this.productService.getProductsByName(""))
                .catch(error => {
                    // TODO: real error handling
                    console.log(error);
                    return Observable.of<Product[]>([]);
                });
            this.isSearchFirst = true;
        }

        this.searchTerms.next(term);
    }

    ngOnInit() {

        this.products = this.productService.getProductsByName("")
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Product[]>([]);
            });

        // this.products = this.searchTerms.debounceTime(300).distinctUntilChanged()
        //     .switchMap(term => term ? this.productService.GetProductsByName(term) :  this.productService.GetProductsByName(""))
        //     .catch(error => {
        //         // TODO: real error handling
        //         console.log(error);
        //         return Observable.of<Product[]>([]);
        //     });

    }
}