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
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var http_1 = require('@angular/http');
var angular2_notifications_1 = require('angular2-notifications');
var Subject_1 = require('rxjs/Subject');
var UserOutput = (function () {
    function UserOutput() {
    }
    return UserOutput;
}());
var USER_SESSION = "user";
var AuthService = (function () {
    function AuthService(http, service) {
        this.http = http;
        this.service = service;
        this.emitter = new Subject_1.Subject();
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }
    AuthService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return window.localStorage[USER_SESSION] !== undefined ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "User", {
        get: function () {
            return window.localStorage[USER_SESSION] !== undefined ? JSON.parse(window.localStorage[USER_SESSION]) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "Username", {
        get: function () {
            if (window.localStorage[USER_SESSION] !== undefined) {
                return JSON.parse(window.localStorage[USER_SESSION]).Name;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var body = new http_1.URLSearchParams(), headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }), options = new http_1.RequestOptions({ headers: headers, method: "post" });
        body.set('action', 'LogIn');
        body.set('Username', username);
        body.set('Password', password);
        return this.http.post(this.staticUrl, body, options).toPromise()
            .then(function (r) {
            var response = r.json(), returnValue;
            if (response !== undefined) {
                if (response.User !== undefined) {
                    window.localStorage[USER_SESSION] = JSON.stringify(response.User[0]);
                    returnValue = response.User[0];
                    _this.emitter.next(true);
                }
                else {
                    returnValue = response;
                    _this.emitter.next(false);
                }
            }
            else {
                _this.emitter.next(false);
                returnValue = undefined;
            }
            return returnValue;
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var body = new http_1.URLSearchParams(), headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }), options = new http_1.RequestOptions({ headers: headers, method: "post" });
        body.set('action', 'LogOut');
        return this.http.post(this.staticUrl, body, options).toPromise()
            .then(function (r) {
            console.log(r.text());
            window.localStorage.removeItem(USER_SESSION);
            _this.emitter.next(false);
            return true;
        })
            .catch(function (error) {
            console.log(error);
            window.localStorage.removeItem(USER_SESSION);
            _this.redirectUrl = "";
            _this.emitter.next(false);
        });
    };
    AuthService.prototype.register = function (user) {
        var body = new http_1.URLSearchParams(), headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }), options = new http_1.RequestOptions({ headers: headers, method: "post" });
        body.set('action', 'AddANewUser');
        body.set('Name', user.Name);
        body.set('Username', user.Username);
        body.set('Password', user.Password);
        body.set('LocationId', user.LocationId.toString());
        body.set('CompanyId', user.CompanyId.toString());
        body.set('IsManager', user.IsManager.toString());
        body.set('UserId', this.User.UserId.toString());
        return this.http.post(this.staticUrl, body, options).toPromise()
            .then(function (r) {
            var result = r.text();
            if (result == "")
                return undefined;
            return r.json();
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_notifications_1.NotificationsService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map