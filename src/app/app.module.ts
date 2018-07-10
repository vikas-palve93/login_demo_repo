import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {Routes, RouterModule} from "@angular/router";
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { ChartComponent } from './chart/chart.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'dash-board', component: DashBoardComponent},
  // {path: 'chart', component: ChartComponent}

 
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    DashBoardComponent,
    AppComponent,
    // ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    NgxChartsModule,
    BrowserAnimationsModule,
   RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
