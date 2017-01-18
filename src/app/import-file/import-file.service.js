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
var auth_service_1 = require('../auth/auth.service');
var ImportFileService = (function () {
    function ImportFileService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new http_1.Headers({ 'Content-Type': 'multipart/form-data' });
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }
    ImportFileService.prototype.insertFile = function (file) {
        var body = new http_1.URLSearchParams();
        body.set('action', 'AddAutomaticPriceStock');
        body.set('JsonFile', file);
        body.set('UserId', this.authService.User.UserId.toString());
        //Este bun si asta
        //let bodyString = `action=GetProductListByName&input=+%22ProductName%22%3A%22${producName}%22`;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http
            .post(this.staticUrl, 
        //bodyString,
        body, options)
            .map(function (r) {
            if (r.text() == "")
                return undefined;
            return r.json();
        });
    };
    ImportFileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], ImportFileService);
    return ImportFileService;
}());
exports.ImportFileService = ImportFileService;
//# sourceMappingURL=import-file.service.js.map