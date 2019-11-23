import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { AssistanceService } from '../service/assistance.service';

@Component({
  selector: 'app-help-form',
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.scss']
})
export class HelpFormComponent implements OnInit {
  form: FormGroup;
  typesOfDisabilities: string[] = ["Choroba neurologiczna", 
    "Niepełnosprawność ruchowa", "Niepełnosprawność słuchu i/lub mowy"];
  userId: number = 1;

  constructor(private dialogRef: MatDialogRef<HelpDialogComponent>,
              private formBuilder: FormBuilder,
              private assistanceService: AssistanceService) { }

  ngOnInit() {
    this.form = this.buildAssistanceForm();
  }

  buildAssistanceForm() {
    return this.formBuilder.group({
      typeOfDisability: ['', Validators.required],
      typeOfHelp: ['', Validators.required]
    });
  }

  addAssistance() {
    this.assistanceService.sendAssistance(this.form.value, this.userId).subscribe(() => {
      this.reload();
    })
  }

  reload() {
    location.reload();
  }

}