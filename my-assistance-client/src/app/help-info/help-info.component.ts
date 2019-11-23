import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AssistanceService} from '../service/assistance.service';

@Component({
  selector: 'app-help-info',
  templateUrl: './help-info.component.html',
  styleUrls: ['./help-info.component.scss']
})
export class HelpInfoComponent implements OnInit {
  email: string = "p.mironiuk1@gmail.com";
  username: string ="antek123";

  constructor(public dialogRef: MatDialogRef<HelpInfoComponent>,
              private assistanceService: AssistanceService) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  sendEmail() {
    this.assistanceService.confirmAssistance(this.email, this.username).subscribe(() => {
      console.log("Wyslano emaila");
      this.closeDialog();
    })
  }

}
