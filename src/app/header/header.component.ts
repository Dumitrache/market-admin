import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Location } from '@angular/common';
import { Router, Resolve } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserType } from '../auth/user-output';
@Component({
    moduleId: module.id,
    selector: 'ma-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    public visible: boolean;
    public Username: string;
    private listener: Subscription;
    public IsManager: boolean;

    constructor(private authService: AuthService, private router: Router) {
        this.visible = this.authService.isLoggedIn;
    }

    ngOnInit() {
        this.visible = this.authService.isLoggedIn;

        this.listener = this.authService.getChangeEmitter().subscribe(item => {
            this.visible = item;
            if (this.visible == true) {
                this.Username = this.authService.Username;
                this.IsManager = this.authService.User.IsManager == UserType.IsManager ? true : false;
            }
        });

        if (this.visible == true) {
            this.Username = this.authService.Username;
        }
    }

    logout() {
        this.authService.logout().then(x => {
            this.visible = false;
            this.router.navigate(['/login']);
        });
    }

    ngOnDestroy(){
        if(this.listener)
            this.listener.unsubscribe();
    }
}
