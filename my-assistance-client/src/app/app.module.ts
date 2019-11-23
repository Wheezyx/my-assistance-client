import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RolePickComponent} from './role-pick/role-pick.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {AssistanceMapComponent} from './assistance-map/assistance-map.component';
import {HelpInfoComponent} from './help-info/help-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './auth/authentication.service';
import {AuthGuard} from './auth/auth.guard';
import {AgmCoreModule} from '@agm/core';
import {HelpFormComponent} from './help-form/help-form.component';
import {HelpDialogComponent} from './help-dialog/help-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {AssistanceService} from './service/assistance.service';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RolePickComponent,
    AssistanceMapComponent,
    HelpInfoComponent,
    HelpFormComponent,
    HelpDialogComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [AuthGuard,
    AuthenticationService,
    AssistanceService],
  bootstrap: [AppComponent],
  entryComponents: [
    HelpInfoComponent,
    HelpFormComponent
  ]
})
export class AppModule {
}
