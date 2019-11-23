import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-help-info',
  templateUrl: './help-info.component.html',
  styleUrls: ['./help-info.component.scss']
})
export class HelpInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpInfoComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
