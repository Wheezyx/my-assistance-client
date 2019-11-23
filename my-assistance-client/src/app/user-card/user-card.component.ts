import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  user: User = {id: 1, username: "antek123", firstname: "Antek", lastname: "Kowalski", notCompletedAssistances: []};

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

}
