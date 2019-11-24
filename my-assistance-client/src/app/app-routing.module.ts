import { AssistanceDetailsComponent } from './assistance-details/assistance-details.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RolePickComponent} from './role-pick/role-pick.component';
import {AssistanceMapComponent} from './assistance-map/assistance-map.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'assistance-map', component: AssistanceMapComponent, canActivate: [AuthGuard]},
  {path: 'role', component: RolePickComponent, canActivate: [AuthGuard]},
  {path: 'assistance/details/:id', component: AssistanceDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
