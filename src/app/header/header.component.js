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
var auth_service_1 = require('../auth/auth.service');
var router_1 = require('@angular/router');
var user_output_1 = require('../auth/user-output');
var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.visible = this.authService.isLoggedIn;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visible = this.authService.isLoggedIn;
        this.listener = this.authService.getChangeEmitter().subscribe(function (item) {
            _this.visible = item;
            if (_this.visible == true) {
                _this.Username = _this.authService.Username;
                _this.IsManager = _this.authService.User.IsManager == user_output_1.UserType.IsManager ? true : false;
            }
        });
        if (this.visible == true) {
            this.Username = this.authService.Username;
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (x) {
            _this.visible = false;
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.listener)
            this.listener.unsubscribe();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ma-header',
            templateUrl: 'header.component.html',
            styleUrls: ['header.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map