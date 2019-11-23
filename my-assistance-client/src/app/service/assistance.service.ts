import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Assistance } from "../model/assistance";
import { AuthenticationService } from '../auth/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AssistanceService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }
  getAllAssistanceForLocationInRange(
    lat: number,
    long: number,
    range: number
  ): Observable<Array<Assistance>> {
    return this.http.get<Array<Assistance>>(
      environment.getAssistancesUrl +
        "?latitude=" +
        lat +
        "&longitude=" + long + "&range=" +
        range
    );
  }

  sendAssistance(
    assistance: Assistance,
    userId: number
  ): Observable<Assistance> {
    assistance.latitude = sessionStorage.getItem("latitude");
    assistance.longitude = sessionStorage.getItem("longitude");
    return this.http.post<Assistance>(
      environment.sendAssistanceUrl + "/" + userId,
      assistance
    );
  }

  confirmAssistance(email: string, username: string): Observable<any> {
    return this.http.post<any>(environment.sendEmailUrl, {email: email, username: username, 
      helperUsername: this.authenticationService.getCurrentUser() });
  }

}
