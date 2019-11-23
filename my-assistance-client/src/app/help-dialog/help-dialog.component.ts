import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { HelpFormComponent } from '../help-form/help-form.component';

@Component({
  selector: 'app-help-dialog',
  templateUrl: 'help-dialog.component.html',
  styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent {

  dialogRef: MatDialogRef<HelpFormComponent>;
  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialogRef = this.dialog.open(HelpFormComponent, {
      width: '30%',
      height: '33%'
    });
  }
}
