import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {SessionUser} from './sessionUser';
import {ActivatedRoute} from '@angular/router';
import { User } from '../model/user';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  public token: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getCurrentUsername(): string {
    return this.currentUserValue.username;
  }

  login(credentials, callback, errorCallback): void {
    this.getLoginResponse(credentials).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify((res.body)));
        this.currentUserSubject.next(res.body);
        return callback && callback();
      }, error => {
        return errorCallback && errorCallback(error);
      });
  }

  getLoginResponse(credentials): Observable<any> {
    const data = {username: credentials.username, password: credentials.password};
    return this.http.post(environment.authenticateUrl, data, {observe: 'response'});
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
