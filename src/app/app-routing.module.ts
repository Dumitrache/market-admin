import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { ImportFileComponent } from './import-file/import-file.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', redirectTo: '/products', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login',  component: LoginComponent },
  { path: 'locations', loadChildren: 'app/location/location.module#LocationModule', canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'import', component: ImportFileComponent },
  { path: 'products', loadChildren: 'app/product/product.module#ProductModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule', canActivate: [AuthGuard] },  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
