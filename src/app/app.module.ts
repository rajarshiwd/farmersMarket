import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import{HelpComponent} from './help/help.component';
import{LogDashboardComponent} from './login/logdashboard.component';
import{MarketComponent} from './market/market.component';
import{routing} from './app.routing';
import{ HomeComponent } from './home/home.component';
import{AdminComponent} from './login/admin.component';
import{UseerComponent} from './login/useer.component';
import{ManagerComponent} from './login/manager.component';
import{GuestComponent}  from './login/guest.component';
import {ClientoptionComponent} from './clientoptions/clientsoptions.component';
import {AdminworkComponent} from './adminwork/adminwork.component';
import{UnauthorizedComponent} from './unauthorised.component';
import {AdminuserComponent} from './adminwork/adminuser.component';
import {AdminstockComponent} from './adminwork/adminstock.component';
import {AdminEditUserComponent} from './adminwork/adminedituser.component';
import {ManagerworkComponent} from './managerwork/managerwork.component';
import {WorkerworkComponent} from './workerwork/workerwork.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    LogDashboardComponent,
    MarketComponent,
    HomeComponent,
    AdminComponent,
    UseerComponent,
    ManagerComponent,
    GuestComponent,
    ClientoptionComponent,
    AdminworkComponent,
    UnauthorizedComponent,
    AdminuserComponent,
    AdminstockComponent,
    AdminEditUserComponent,
    ManagerworkComponent,
    WorkerworkComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
