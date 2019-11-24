import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Assistance } from "../model/assistance";
import { AssistanceService } from "../service/assistance.service";
import { AuthenticationService } from "../auth/authentication.service";

@Component({
  selector: "app-help-info",
  templateUrl: "./help-info.component.html",
  styleUrls: ["./help-info.component.scss"]
})
export class HelpInfoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HelpInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private assistanceService: AssistanceService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    console.log('NGONINIT' + this.data);
  }
  closeDialog() {
    this.dialogRef.close();
  }

  handleRemovingAssistance() {
    //TODO IMPLEMENT REMOVING ASSISTANCE.
  }

  assignToAssistance() {
    console.log(this.data.assistance);
    this.assistanceService
      .assignUserToAssistance(
        this.data.assistance.id,
        this.authenticationService.currentUserValue.id
      )
      .subscribe(assistance => {});
    console.log("Przypisano usera");
    //location.reload();
  }
}
