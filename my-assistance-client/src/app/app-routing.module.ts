import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RolePickComponent} from './role-pick/role-pick.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'role', component: RolePickComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
