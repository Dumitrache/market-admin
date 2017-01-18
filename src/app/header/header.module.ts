// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent
    ],
    providers: [AuthService]
})
export class HeaderModule {

}
