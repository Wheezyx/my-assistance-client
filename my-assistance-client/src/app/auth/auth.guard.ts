import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  canActivate() {
    const currentUser = this.authenticationService.getCurrentUser();
    if (currentUser) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
