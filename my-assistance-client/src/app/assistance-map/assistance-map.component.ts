import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';
import {HelpInfoComponent} from '../help-info/help-info.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-assistance-map',
  templateUrl: './assistance-map.component.html',
  styleUrls: ['./assistance-map.component.scss'],
  providers: [DialogService]
})
export class AssistanceMapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

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

}
