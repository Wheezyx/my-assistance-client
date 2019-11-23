import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Assistance } from "../model/assistance";
import { AssistanceService } from '../service/assistance.service';

@Component({
  selector: "app-help-info",
  templateUrl: "./help-info.component.html",
  styleUrls: ["./help-info.component.scss"]
})
export class HelpInfoComponent implements OnInit {
  email: string = "p.mironiuk1@gmail.com";
  username: string = "antek123";

  constructor(
    public dialogRef: MatDialogRef<HelpInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Assistance,
    private assistanceService: AssistanceService
  ) {}

  ngOnInit() {
    console.log(this.data);
  }
  closeDialog() {
    this.dialogRef.close("Pizza!");
  }

  sendEmail() {
    this.assistanceService
      .confirmAssistance(this.email, this.username)
      .subscribe(() => {
        console.log("Wyslano emaila");
        this.closeDialog();
      });
  }
}
