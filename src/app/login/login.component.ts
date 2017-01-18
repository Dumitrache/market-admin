import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user-output';
import { Error } from '../common/error';
import { NotificationsService } from 'angular2-notifications';
import { Location } from '@angular/common';
import { Router, Resolve } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NotificationsService]
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  private loginResponse: Promise<User | Error>;
  public options: any;

  constructor(private authService: AuthService,
    private service: NotificationsService,
    private router: Router) {
    this.options = {
      position: ["top", "right"],
      timeOut: 3000,
      pauseOnHover: true,
      lastOnBottom: false,
      animate: 'scale'
    };
  }

  ngOnInit() {
  }

  public login() {
    this.loginResponse = this.authService.login(this.username, this.password)
      .catch(error => {
        console.log(error);
      });

    this.loginResponse.then(response => {
      if (response !== undefined) {
        var ex = <any>response;
        if (ex.Name !== undefined) {
          this.service.success('Login', 'Welcome ' + ex.Name);
          this.router.navigate(['/home']);
        }
        else {
          for (let item of ((<Error>response).Errors)) {
            console.log(item);
            this.service.error('Login', item);
          }
        }
      }
    });
  }

  public logout() {

  }
}