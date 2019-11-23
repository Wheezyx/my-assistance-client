import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Assistance} from '../model/assistance';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  sendAssistance(assistance: Assistance, userId: number): Observable<Assistance> {
    assistance.latitude = sessionStorage.getItem('latitude');
    assistance.longitude = sessionStorage.getItem('longitude');
    return this.http.post<Assistance>(environment.sendAssistanceUrl + '/' + userId, assistance);
  }

  confirmAssistance(email: string, username: string): Observable<any> {
    return this.http.post<any>(environment.sendEmailUrl, {email: email, username: username, 
      helperUsername: this.authenticationService.getCurrentUser() });
  }

}
