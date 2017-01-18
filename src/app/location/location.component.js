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
var location_1 = require('./location');
var location_service_1 = require('./location.service');
var common_1 = require('@angular/common');
var angular2_notifications_1 = require('angular2-notifications');
var LocationComponent = (function () {
    function LocationComponent(locationService, service, location) {
        this.locationService = locationService;
        this.service = service;
        this.location = location;
        this.locationModel = new location_1.Location();
        this.locationModel.company_id = 1;
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
    }
    LocationComponent.prototype.ngOnInit = function () { };
    LocationComponent.prototype.add = function () {
        var _this = this;
        //Add component
        this.locationService.addLocation(this.locationModel)
            .then(function (message) {
            if (message === undefined)
                _this.service.success("Location", 'Location was saved!');
            else {
                for (var _i = 0, _a = message.Errors; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.service.error('Location', item);
                }
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    LocationComponent.prototype.goBack = function () {
        this.location.back();
    };
    LocationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ma-location',
            templateUrl: 'location.component.html'
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService, angular2_notifications_1.NotificationsService, common_1.Location])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.component.js.map