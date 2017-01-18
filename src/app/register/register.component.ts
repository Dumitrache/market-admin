import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { User, UserType } from '../auth/user-output';
import { AuthService } from '../auth/auth.service';
import { LocationService } from '../location/location.service';
import { Location } from '../location/location';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
    providers: [NotificationsService, LocationService]
})
export class RegisterComponent implements OnInit {

    public user: User;
    public options: any;
    public locations: Location[];
    public location: Location;

    constructor(private notification: NotificationsService, 
        private authService: AuthService,
        private locationService: LocationService) {
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
        this.user = new User();
    }

    ngOnInit() { 
        this.locationService.getLocations(this.authService.User.CompanyId).subscribe(items =>
        {
            this.locations = items;
        });
    }

    register() {
        //alert(JSON.stringify(this.user));
        let element = document.getElementById('locationID') as HTMLSelectElement;
        this.user.LocationId = parseInt(element.options[element.selectedIndex].value);
        this.user.CompanyId = this.authService.User.CompanyId;
        this.user.IsManager = UserType.IsNotManager;
        
        this.authService.register(this.user)
            .then(result => {
                if(result !== undefined){
                    for(let item of result.Errors){
                        this.notification.error('Register', item);                        
                    }
                }
                else{
                    this.notification.success('Register', 'The user was saved!');
                }
            });
    }

    selectLocation(){
        let element = document.getElementById('locationID') as HTMLSelectElement;
        this.user.LocationId = parseInt(element.options[element.selectedIndex].value);
        alert(this.user.LocationId);
    }
}
