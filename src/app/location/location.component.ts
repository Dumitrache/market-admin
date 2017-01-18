import { Component, OnInit } from '@angular/core';
import { Location as LocationModel } from './location';
import { LocationService } from './location.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'ma-location',
    templateUrl: 'location.component.html'
})
export class LocationComponent implements OnInit {

    private locationModel: LocationModel;
    private options: any;

    constructor(private locationService: LocationService,
        private service: NotificationsService,
        private location: Location) {
        this.locationModel = new LocationModel();
        this.locationModel.company_id = 1;
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
    }

    ngOnInit() { }

    public add() {
        //Add component
        this.locationService.addLocation(this.locationModel)
            .then(message => {
                if(message === undefined)
                    this.service.success("Location", 'Location was saved!');
                else{
                    for(let item of message.Errors){
                        this.service.error('Location', item);
                    }
                }
            })
            .catch(error => console.log(error));
    }

    goBack(): void {
        this.location.back();
    }
}