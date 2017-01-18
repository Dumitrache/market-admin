import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ProductModule } from './product/product.module';
import { LocationModule } from './location/location.module';

import { LoginModule } from './login/login.module';

//Routings
import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RegisterModule } from './register/register.module';
import { ImportFileModule } from './import-file/import-file.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    ProductModule,
    LocationModule,
    LoginModule,
    HeaderModule,
    ImportFileModule,
    RegisterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
