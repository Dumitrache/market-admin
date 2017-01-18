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
var location_service_1 = require('./location.service');
var Observable_1 = require('rxjs/Observable');
var auth_service_1 = require('../auth/auth.service');
var LocationDatatableComponent = (function () {
    function LocationDatatableComponent(locationService, authService) {
        this.locationService = locationService;
        this.authService = authService;
        this.isExtern = false;
        this.notify = new core_1.EventEmitter();
    }
    LocationDatatableComponent.prototype.ngOnInit = function () {
        this.locations = this.locationService.getLocations(this.authService.User.CompanyId)
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
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
    };
    LocationDatatableComponent.prototype.selectLocation = function (item) {
        if (item === this.selectedLocation) {
            this.selectedLocation = undefined;
            this.notify.emit(undefined);
        }
        else {
            this.selectedLocation = item;
            this.notify.emit(item.LocationId);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LocationDatatableComponent.prototype, "isExtern", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LocationDatatableComponent.prototype, "notify", void 0);
    LocationDatatableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ma-location-datatable',
            templateUrl: 'location-datatable.component.html',
            styles: ["tbody tr.selected {\n        background-color: #C0C0C0;\n    }"]
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService, auth_service_1.AuthService])
    ], LocationDatatableComponent);
    return LocationDatatableComponent;
}());
exports.LocationDatatableComponent = LocationDatatableComponent;
//# sourceMappingURL=location-datatable.component.js.map