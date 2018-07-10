import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import { ChartComponent } from '@swimlane/ngx-charts';
const routes: Routes = [
{ path: 'user', component: UserComponent },
{ path: 'login', component: LoginComponent },
{ path: 'chart', component: ChartComponent },
{path : '', component : LoginComponent}
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }