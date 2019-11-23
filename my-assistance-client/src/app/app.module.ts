import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RolePickComponent} from './role-pick/role-pick.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {AssistanceMapComponent} from './assistance-map/assistance-map.component';
import {HelpInfoComponent} from './help-info/help-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './auth/authentication.service';
import {AuthGuard} from './auth/auth.guard';
import {AgmCoreModule} from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RolePickComponent,
    AssistanceMapComponent,
    HelpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [AuthGuard,
    AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [HelpInfoComponent]
})
export class AppModule {
}
