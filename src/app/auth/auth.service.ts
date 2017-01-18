import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Response, URLSearchParams, Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user-output';
import { Error } from '../common/error';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Subject';

class UserOutput {
  public User: User[];
}

const USER_SESSION: string = "user";

@Injectable()
export class AuthService {
  private staticUrl: string;

  public emitter: Subject<boolean> = new Subject<boolean>();

  getChangeEmitter() {
    return this.emitter;
  }

  public get isLoggedIn(): boolean {
    return window.localStorage[USER_SESSION] !== undefined ? true : false;
  }

  public get User(): User {
    return window.localStorage[USER_SESSION] !== undefined ? <User>JSON.parse(window.localStorage[USER_SESSION]) : undefined;
  }

  get Username(): string {
    if (window.localStorage[USER_SESSION] !== undefined) {
      return (<User>JSON.parse(window.localStorage[USER_SESSION])).Name;
    }
    return undefined;
  }

  constructor(private http: Http, private service: NotificationsService) {
    this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password: string): Promise<User | Error> {
    let body = new URLSearchParams(),
      headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      options = new RequestOptions({ headers: headers, method: "post" });
    body.set('action', 'LogIn');
    body.set('Username', username);
    body.set('Password', password);

    return this.http.post(this.staticUrl, body, options).toPromise()
      .then((r: Response) => {
        let response = r.json() as any,
          returnValue: Error | User;
        if (response !== undefined) {
          if (response.User !== undefined) {
            window.localStorage[USER_SESSION] = JSON.stringify(response.User[0]);
            returnValue = <User>response.User[0];
            this.emitter.next(true);
          }
          else {
            returnValue = <Error>response;
            this.emitter.next(false);
          }
        }
        else {
          this.emitter.next(false);
          returnValue = undefined;
        }
        return returnValue;
      });
  }

  logout(): Promise<boolean> {
    let body = new URLSearchParams(),
      headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      options = new RequestOptions({ headers: headers, method: "post" });
    body.set('action', 'LogOut');

    return this.http.post(this.staticUrl, body, options).toPromise()
      .then((r: Response) => {
        console.log(r.text());
        window.localStorage.removeItem(USER_SESSION);
        this.emitter.next(false);
        return true;

      })
      .catch(error => {
        console.log(error)
        window.localStorage.removeItem(USER_SESSION);
        this.redirectUrl = "";
        this.emitter.next(false);
      });

  }

  register(user:User): Promise<Error>{
let body = new URLSearchParams(),
      headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      options = new RequestOptions({ headers: headers, method: "post" });

      
    body.set('action', 'AddANewUser');
    body.set('Name', user.Name);
    body.set('Username', user.Username);
    body.set('Password', user.Password);
    body.set('LocationId', user.LocationId.toString());
    body.set('CompanyId', user.CompanyId.toString());
    body.set('IsManager', (<number>user.IsManager).toString());
    body.set('UserId',this.User.UserId.toString());

    return this.http.post(this.staticUrl, body, options).toPromise()
      .then((r: Response) => {
        var result = r.text();
        if(result == "")
          return undefined;

        return r.json() as Error;        
      });
  }
}