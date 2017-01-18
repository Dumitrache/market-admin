import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'ma-location-datatable',
    templateUrl: 'location-datatable.component.html',
    styles: [`tbody tr.selected {
        background-color: #C0C0C0;
    }`]
})
export class LocationDatatableComponent implements OnInit {

    public locations: Observable<Location[]>;
    // public locations: Location[];
    public selectedLocation: Location;

    @Input()
    public isExtern: boolean = false;

    @Output() 
    notify: EventEmitter<number> = new EventEmitter<number>();

    constructor(private locationService: LocationService,
         private authService: AuthService) { }

    ngOnInit() {
        this.locations = this.locationService.getLocations(this.authService.User.CompanyId)
        .catch(error => {
                    // TODO: real error handling
                    console.log(error);
                    return Observable.of<Location[]>([]);
                });
        // this.locations = [
        //     {
        //         company_id: 1,
        //         LocationId: 1,
        //         LocationAdress: 'Address 1',
        //         LocationLat: 255,
        //         LocationLng: 3546,
        //         LocationName: 'Location Name 1'
        //     },
        //     {
        //         company_id: 1,
        //         LocationId: 2,
        //         LocationAdress: 'Address 2',
        //         LocationLat: 255,
        //         LocationLng: 3546,
        //         LocationName: 'Location Name 2s'
        //     }];
    }

    selectLocation(item: Location) {
        if (item === this.selectedLocation) {
            this.selectedLocation = undefined;
            this.notify.emit(undefined);
        }
        else {
            this.selectedLocation = item;
            this.notify.emit(item.LocationId);
        }
    }
}