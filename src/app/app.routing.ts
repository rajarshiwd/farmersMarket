<<<<<<< HEAD
import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import{HelpComponent} from './help/help.component';
import{LogDashboardComponent} from './login/logdashboard.component'; 
import{MarketComponent} from './market/market.component';
import{ HomeComponent } from './home/home.component';

import{AdminComponent} from './login/admin.component';
import{UseerComponent} from './login/useer.component';
import{ManagerComponent} from './login/manager.component';
import{GuestComponent} from './login/guest.component';
import {AdminworkComponent} from './adminwork/adminwork.component';
import{UnauthorizedComponent} from './unauthorised.component';
import{AdminuserComponent} from './adminwork/adminuser.component';
import{AdminstockComponent} from './adminwork/adminstock.component';
import {AdminEditUserComponent} from './adminwork/adminedituser.component';
import {ManagerworkComponent} from './managerwork/managerwork.component';
import {WorkerworkComponent} from './workerwork/workerwork.component';


export const routes:Routes =[

     {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
       path:'home',
       component:HomeComponent,
    },
    {
path:'clientorder',
component:ManagerworkComponent,
},
{
path:'managerwork',
component:WorkerworkComponent,
},
     
    {
path:'adminwork',

component:AdminworkComponent,

children:[
       
        {
path:'',
component:AdminstockComponent
       },
       {
path:'stock',
component:AdminstockComponent
       },

       {
        path:'worker',
        component:AdminuserComponent
       },
        {
        path:':id',
        component:AdminEditUserComponent
       },
      
]
 

},
    {
        path:'contact',
        
       component:ContactComponent
    },
    {
       path:'market',
       component:MarketComponent,
    },

   {
       path:'login',
       component:LogDashboardComponent,

   
   children:[
       
       {
        path:'',
        component:GuestComponent
       },
     
       {
        path:'admin',
        component:AdminComponent
       },
       {
        path:'manager',
        
       component:ManagerComponent
    },
    {
           path:'user',
           component:UseerComponent
       },
       
   ]
    
},


 { path: 'unauthorized', component: UnauthorizedComponent },


]



export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
=======
import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import{HelpComponent} from './help/help.component';
import{LogDashboardComponent} from './login/logdashboard.component';
import{MarketComponent} from './market/market.component';
import{ HomeComponent } from './home/home.component';

import{AdminComponent} from './login/admin.component';
import{UseerComponent} from './login/useer.component';
import{ManagerComponent} from './login/manager.component';
import{GuestComponent} from './login/guest.component';
import {AdminworkComponent} from './adminwork/adminwork.component';
import{UnauthorizedComponent} from './unauthorised.component';
import{AdminuserComponent} from './adminwork/adminuser.component';
import{AdminstockComponent} from './adminwork/adminstock.component';
import {AdminEditUserComponent} from './adminwork/adminedituser.component';
import {ManagerworkComponent} from './managerwork/managerwork.component';
import {WorkerworkComponent} from './workerwork/workerwork.component';


export const routes:Routes =[

     {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
       path:'home',
       component:HomeComponent,
    },
    {
path:'clientorder',
component:ManagerworkComponent,
},
{
path:'managerwork',
component:WorkerworkComponent,
},
     
    {
path:'adminwork',

component:AdminworkComponent,

children:[
       
        {
path:'',
component:AdminstockComponent
       },
       {
path:'stock',
component:AdminstockComponent
       },

       {
        path:'worker',
        component:AdminuserComponent
       },
        {
        path:':id',
        component:AdminEditUserComponent
       },
      
]
 

},
    {
        path:'contact',
        
       component:ContactComponent
    },
    {
       path:'market',
       component:MarketComponent,
    },

   {
       path:'login',
       component:LogDashboardComponent,

   
   children:[
       
       {
        path:'',
        component:GuestComponent
       },
     
       {
        path:'admin',
        component:AdminComponent
       },
       {
        path:'manager',
        
       component:ManagerComponent
    },
    {
           path:'user',
           component:UseerComponent
       },
       
   ]
    
},


 { path: 'unauthorized', component: UnauthorizedComponent },


]



export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
>>>>>>> 8975246dc984f3e33782c89937a63c88f919eccd
