import { AuthenticationService } from './../auth/authentication.service';
import { Assistance } from './../model/assistance';
import { AssistanceService } from "./../service/assistance.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DialogService } from "primeng/api";
import { HelpInfoComponent } from "../help-info/help-info.component";
import { MatDialog } from "@angular/material";
import { LocationService } from "../location.service";
import { HelpDialogComponent } from "../help-dialog/help-dialog.component";
import { first } from "rxjs/operators";
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AssistanceSummaryDialogComponent } from '../assistance-summary-dialog/assistance-summary-dialog.component';

@Component({
  selector: "app-assistance-map",
  templateUrl: "./assistance-map.component.html",
  styleUrls: ["./assistance-map.component.scss"],
  providers: [DialogService]
})
export class AssistanceMapComponent implements OnInit {
  @ViewChild(HelpDialogComponent, { static: false })
  helpFormDialogComponent: HelpDialogComponent;
  lat = null;
  lng = null;
  assistances: Array<Assistance>

  constructor(
    public dialog: MatDialog,
    private locationService: LocationService,
    private assistanceSerivce: AssistanceService,
    private router: Router,
    private authenticationService: AuthenticationService
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
    this.getLocation();
  }

  show(assistance) {
    console.log(this.lat, this.lng);
    const dialogRef = this.dialog.open(HelpInfoComponent, {
      height: "50%",
      width: "20%",
      minWidth: "200px",
      data: {assistance}
    });
  }

  showBoundaries(event) {}

  openAssistanceSummaryDialog() {
    const dialogRef = this.dialog.open(AssistanceSummaryDialogComponent, {
      width: '30%',
      height: '36%'
    });
  }

  getLocation() {
    if (this.authenticationService.currentUserValue.id === 1) {
      this.locationService.getPosition().then(pos => {
        this.lat = pos.lat;
        this.lng = pos.lng;
        sessionStorage.setItem("longitude", this.lng + "");
        sessionStorage.setItem("latitude", this.lat + "");
        console.log(`Positon: ${pos.lng} ${pos.lat}`);
        this.getAssistances();
      });
    } else {
      sessionStorage.setItem("longitude", this.lng + "");
      sessionStorage.setItem("latitude", this.lat + "");
      console.log(`Positon: ${this.lng} ${this.lat}`);
      this.getAssistances();
    }
  }
  getAssistances() {
    this.assistanceSerivce
      .getAllAssistanceForLocationInRange(this.lat, this.lng, 20)
      .pipe(first())
      .subscribe(response => {
          this.assistances = response;
      });
  }

  openHelpForm() {
    this.helpFormDialogComponent.openDialog();
  }

  showAssistanceDetails(assistance: Assistance) {
    console.log(assistance);
    this.router.navigate(['/assistance/details', assistance.id]);
  }
}
