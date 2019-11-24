import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Assistance } from "../model/assistance";
import { AuthenticationService } from "../auth/authentication.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AssistanceService {
  findById(id: number): Observable<Assistance>{
    return this.http.get<Assistance>(environment.baseUrl + '/assistance/' + id);
  }
  constructor(private http: HttpClient) {}
  getAllAssistanceForLocationInRange(
    lat: number,
    long: number,
    range: number
  ): Observable<Array<Assistance>> {
    return this.http.get<Array<Assistance>>(
      environment.getAssistancesUrl +
        "?latitude=" +
        lat +
        "&longitude=" +
        long +
        "&range=" +
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

  public assignUserToAssistance(
    assitanceId,
    assistantId
  ): Observable<Assistance> {
    return this.http
      .post<Assistance>(
        environment.baseUrl +
          "/assistance/" +
          assitanceId +
          "/user/" +
          assistantId +
          "/assign",
        null
      )
      .pipe(first());
  }
}
