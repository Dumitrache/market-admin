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
var import_file_service_1 = require('./import-file.service');
var angular2_notifications_1 = require('angular2-notifications');
var ImportFileComponent = (function () {
    function ImportFileComponent(service, notification) {
        this.service = service;
        this.notification = notification;
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
        this.fileInput = "";
    }
    ImportFileComponent.prototype.addFile = function () {
        var _this = this;
        var inputElement = document.getElementById('fileImport'), files = inputElement.files, file = files[0];
        this.service.insertFile(file).subscribe(function (rez) {
            if (rez !== undefined) {
                for (var _i = 0, _a = rez.Errors; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.notification.error('Import', item);
                }
            }
            else {
                _this.notification.success('Import', 'File was saved!');
            }
        });
    };
    ImportFileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'import-file',
            templateUrl: 'import-file.component.html',
            styleUrls: ['import-file.component.css']
        }), 
        __metadata('design:paramtypes', [import_file_service_1.ImportFileService, angular2_notifications_1.NotificationsService])
    ], ImportFileComponent);
    return ImportFileComponent;
}());
exports.ImportFileComponent = ImportFileComponent;
//# sourceMappingURL=import-file.component.js.map