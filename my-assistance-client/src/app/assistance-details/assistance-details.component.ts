import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { AssistanceService } from '../service/assistance.service';
import { AuthenticationService } from '../auth/authentication.service';
import { Assistance } from '../model/assistance';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-assistance-details',
  templateUrl: './assistance-details.component.html',
  styleUrls: ['./assistance-details.component.scss']
})
export class AssistanceDetailsComponent implements OnInit {

  lat = null;
  lng = null;
  assistance: Assistance;

  constructor(
    private locationService: LocationService,
    private assistanceSerivce: AssistanceService,
    private authenticationService: AuthenticationService,
    private acitvatedRoute: ActivatedRoute
  ) {
    console.log(this.authenticationService.currentUserValue.id)
    if (this.authenticationService.currentUserValue.id === 1) {
      this.lat = 52.232222;
      this.lng = 21.008333;
    } else {
      this.lat = 52.231222;
      this.lng = 21.098333;
    }
    console.log(this.lat, this.lng)
  }

  ngOnInit() {
    this.acitvatedRoute.params.subscribe((params: Params) => {
      this.getAssistance(params.id);
    });
  }

  getAssistance(id: number) {
    this.assistanceSerivce.findById(id).pipe(first()).subscribe(resp => {
      console.log(resp);
      this.assistance = resp;
    })
  }

  getLocation() {
    if (this.authenticationService.currentUserValue.id === 1) {
      this.locationService.getPosition().then(pos => {
        this.lat = pos.lat;
        this.lng = pos.lng;
        sessionStorage.setItem("longitude", this.lng + "");
        sessionStorage.setItem("latitude", this.lat + "");
        console.log(`Positon: ${pos.lng} ${pos.lat}`);
      });
    } else {
      sessionStorage.setItem("longitude", this.lng + "");
      sessionStorage.setItem("latitude", this.lat + "");
      console.log(`Positon: ${this.lng} ${this.lat}`);
    }
  }

}
