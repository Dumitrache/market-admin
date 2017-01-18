// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PushNotificationsModule, SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from '../auth/auth.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PushNotificationsModule,
        SimpleNotificationsModule,
    ],
    declarations: [
        RegisterComponent,
    ],
    exports: [
        RegisterComponent,
    ],
    providers:[AuthService]
})
export class RegisterModule {

}
