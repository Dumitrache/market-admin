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
var angular2_notifications_1 = require('angular2-notifications');
var user_output_1 = require('../auth/user-output');
var auth_service_1 = require('../auth/auth.service');
var location_service_1 = require('../location/location.service');
var RegisterComponent = (function () {
    function RegisterComponent(notification, authService, locationService) {
        this.notification = notification;
        this.authService = authService;
        this.locationService = locationService;
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
        this.user = new user_output_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getLocations(this.authService.User.CompanyId).subscribe(function (items) {
            _this.locations = items;
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        //alert(JSON.stringify(this.user));
        var element = document.getElementById('locationID');
        this.user.LocationId = parseInt(element.options[element.selectedIndex].value);
        this.user.CompanyId = this.authService.User.CompanyId;
        this.user.IsManager = user_output_1.UserType.IsNotManager;
        this.authService.register(this.user)
            .then(function (result) {
            if (result !== undefined) {
                for (var _i = 0, _a = result.Errors; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.notification.error('Register', item);
                }
            }
            else {
                _this.notification.success('Register', 'The user was saved!');
            }
        });
    };
    RegisterComponent.prototype.selectLocation = function () {
        var element = document.getElementById('locationID');
        this.user.LocationId = parseInt(element.options[element.selectedIndex].value);
        alert(this.user.LocationId);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css'],
            providers: [angular2_notifications_1.NotificationsService, location_service_1.LocationService]
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService, auth_service_1.AuthService, location_service_1.LocationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map