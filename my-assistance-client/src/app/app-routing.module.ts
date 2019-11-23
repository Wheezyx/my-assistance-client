import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RolePickComponent} from './role-pick/role-pick.component';
import {AssistanceMapComponent} from './assistance-map/assistance-map.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'role', component: RolePickComponent},
  {path: 'assistance-map', component: AssistanceMapComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
