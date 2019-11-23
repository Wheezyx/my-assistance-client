import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogService} from 'primeng/api';
import {HelpInfoComponent} from '../help-info/help-info.component';
import {MatDialog} from '@angular/material';
import {HelpDialogComponent} from '../help-dialog/help-dialog.component';

@Component({
  selector: 'app-assistance-map',
  templateUrl: './assistance-map.component.html',
  styleUrls: ['./assistance-map.component.scss'],
  providers: [DialogService]
})
export class AssistanceMapComponent implements OnInit {
  @ViewChild(HelpDialogComponent, {static: false}) helpFormDialogComponent: HelpDialogComponent;
  lat = 52.232222;
  lng = 21.008333;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  show() {
    const dialogRef = this.dialog.open(HelpInfoComponent, {
      height: '50%',
      width: '20%',
      minWidth: '200px'
    });
  }

  showBoundaries(event) {
    console.log(event);
  }

  openHelpForm() {
    this.helpFormDialogComponent.openDialog();
  }

}
