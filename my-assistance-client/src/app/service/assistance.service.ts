import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Assistance} from '../model/assistance';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  constructor(private http: HttpClient) { }

  sendAssistance(assistance: Assistance, userId: number): Observable<Assistance> {
    return this.http.post<Assistance>(environment.sendAssistanceUrl + '/' + userId, assistance);
  }

}
