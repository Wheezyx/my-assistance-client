import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {SessionUser} from './sessionUser';
import {ActivatedRoute} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  public token: string;
  private currentUserSubject: BehaviorSubject<SessionUser>;
  public currentUser: Observable<SessionUser>;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
    this.currentUserSubject = new BehaviorSubject<SessionUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): SessionUser {
    return this.currentUserSubject.value;
  }

  getCurrentUser(): SessionUser {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getCurrentUsername(): string {
    return this.currentUserValue.username;
  }

  login(credentials, callback, errorCallback): void {
    this.getLoginResponse(credentials).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(<SessionUser> {username: credentials.username}));
        return callback && callback();
      }, error => {
        return errorCallback && errorCallback(error);
      });
  }

  getLoginResponse(credentials): Observable<HttpResponse<any>> {
    const data = {username: credentials.username, password: credentials.password};
    return this.http.post(environment.authenticateUrl, data, {observe: 'response'});
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
