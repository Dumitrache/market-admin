import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Location } from './location';
import { AuthService } from '../auth/auth.service';
import { Error } from '../common/error';

@Injectable()
export class LocationService {

    private staticUrl: string;
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    constructor(private http: Http, private authService: AuthService) {
        this.staticUrl = 'http://proiectsoftwareinechipa.16mb.com/api/index.php';
    }

    public getLocations(companyId: number) : Observable<Location[]>{
        let body = new URLSearchParams();
        body.set('action', 'GetLocationsListByCompanyId');
        body.set('CompanyId', companyId.toString());
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this.http.post(this.staticUrl, body, options)
        .map((r: Response) => {
            return r.json() as Location[];
        });
    }

    public addLocation(location: Location): Promise<Error> {
        let body = new URLSearchParams();
        body.set('action', 'AddANewLocation');
        body.set('LocationName', location.LocationName);
        body.set('LocationAdress',location.LocationAdress);
        body.set('LocationLat', location.LocationLat.toString());
        body.set('LocationLng', location.LocationLng.toString());
        body.set('UserId',this.authService.User.UserId.toString());
        
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this.http
            .post(this.staticUrl,
            //bodyString,
            body,
            options
            ).toPromise()
            .then((r: Response) => {
                if(r.text() == "")
                    return undefined;

                return r.json() as Error;
            });
    }
}