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
var LocationService = (function () {
    function LocationService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }
    LocationService.prototype.getLocations = function (companyId) {
        var body = new http_1.URLSearchParams();
        body.set('action', 'GetLocationsListByCompanyId');
        body.set('CompanyId', companyId.toString());
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.staticUrl, body, options)
            .map(function (r) {
            return r.json();
        });
    };
    LocationService.prototype.addLocation = function (location) {
        var body = new http_1.URLSearchParams();
        body.set('action', 'AddANewLocation');
        body.set('LocationName', location.LocationName);
        body.set('LocationAdress', location.LocationAdress);
        body.set('LocationLat', location.LocationLat.toString());
        body.set('LocationLng', location.LocationLng.toString());
        body.set('UserId', this.authService.User.UserId.toString());
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
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map