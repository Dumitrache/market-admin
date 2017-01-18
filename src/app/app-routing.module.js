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
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var auth_guard_service_1 = require('./auth/auth-guard.service');
var register_component_1 = require('./register/register.component');
var import_file_component_1 = require('./import-file/import-file.component');
var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full', canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'home', redirectTo: '/products', pathMatch: 'full', canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'locations', loadChildren: 'app/location/location.module#LocationModule', canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'import', component: import_file_component_1.ImportFileComponent },
    { path: 'products', loadChildren: 'app/product/product.module#ProductModule', canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'login', loadChildren: 'app/auth/login/login.module#LoginModule', canActivate: [auth_guard_service_1.AuthGuard] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [auth_guard_service_1.AuthGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map