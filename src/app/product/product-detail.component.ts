import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { PriceStock } from './price-stock';
import { ProductService } from './product.service';
import { NotificationsService } from 'angular2-notifications';
import { Location } from '../location/location';
import { LocationService } from '../location/location.service';
import { AuthService } from '../auth/auth.service';
import { asEnumerable } from 'linq-es2015';
import { UserType } from '../auth/user-output';


@Component({
    moduleId: module.id,
    selector: 'ma-product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProducDetailComponent implements OnInit {

    @Input()
    public product: Product;

    @Output() 
    onVisible = new EventEmitter<boolean>();

    public priceStock: PriceStock;
    public locations: Location[];

    public locationID: number;
    public isSelected: boolean;

    public options: any;

    constructor(
        private _service: NotificationsService,
        private productService: ProductService, 
        private locationService: LocationService,
        private authService: AuthService) {
        this.isSelected = false;

        this.locationService.getLocations(this.authService.User.CompanyId)
            .subscribe(items => {
                
                if(this.authService.User.IsManager == UserType.IsNotManager){
                    this.locations = asEnumerable(items).Where( x=> x.LocationId == this.authService.User.LocationId).ToArray();
                }
                else{
                    this.locations = items;
                }

            });

        this.priceStock = new PriceStock();

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

    public onNotify(id: number) {
        this.locationID = id;
        // alert(id);
    }

    public getSelectedLocation() {
        this.isSelected = this.locationID !== undefined ? true : false;
    }

    public add() {
        let element = document.getElementById('LocationIDs') as HTMLSelectElement;
        this.locationID = parseInt(element.options[element.selectedIndex].value);
        if (this.priceStock && this.locationID && this.product) {
            this.priceStock.LocationID = this.locationID;
            this.priceStock.ProductID = this.product.ProductId;

            this.productService.addPriceStock(this.priceStock)
                .then(message => {
                    //alert();
                    if(message === undefined)
                        this._service.success("Stock", 'Stock was saved!');
                    else{
                        for(let item of message.Errors){
                            this._service.error('Stock', item);
                        }
                    }
                    //this.goBack();
                })
                .catch(error => console.log(error));
        }
        else {
            this._service.error('Stock', 'Something is wrong.');
        }

    }

    public goBack(){
        this.onVisible.emit(true);
    }
}