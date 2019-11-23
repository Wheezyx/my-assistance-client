import { Assistance } from './../model/assistance';
import { AssistanceService } from "./../service/assistance.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DialogService } from "primeng/api";
import { HelpInfoComponent } from "../help-info/help-info.component";
import { MatDialog } from "@angular/material";
import { LocationService } from "../location.service";
import { HelpDialogComponent } from "../help-dialog/help-dialog.component";
import { first } from "rxjs/operators";

@Component({
  selector: "app-assistance-map",
  templateUrl: "./assistance-map.component.html",
  styleUrls: ["./assistance-map.component.scss"],
  providers: [DialogService]
})
export class AssistanceMapComponent implements OnInit {
  @ViewChild(HelpDialogComponent, { static: false })
  helpFormDialogComponent: HelpDialogComponent;
  lat = 52.232222;
  lng = 21.008333;
  assistances: Array<Assistance>

  constructor(
    public dialog: MatDialog,
    private locationService: LocationService,
    private assistanceSerivce: AssistanceService
  ) {}

  ngOnInit() {
    this.getLocation();
  }

  show(assistance) {
    const dialogRef = this.dialog.open(HelpInfoComponent, {
      height: "50%",
      width: "20%",
      minWidth: "200px",
      data: {assistance}
    });
  }

  showBoundaries(event) {}

  getLocation() {
    this.locationService.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lng = pos.lng;
      sessionStorage.setItem("longitude", this.lng + "");
      sessionStorage.setItem("latitude", this.lat + "");
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.getAssistances();
    });
  }
  getAssistances() {
    this.assistanceSerivce
      .getAllAssistanceForLocationInRange(this.lat, this.lng, 10)
      .pipe(first())
      .subscribe(response => {
          this.assistances = response;
      });
  }

  openHelpForm() {
    this.helpFormDialogComponent.openDialog();
  }
}
