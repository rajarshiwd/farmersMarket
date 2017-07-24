import { Component,OnInit } from '@angular/core';
import{Router,CanActivate} from '@angular/router';


import{EventEmitter} from '@angular/core';
import {AdminService} from './../services/admin.service';
import {User} from 'C:/Users/rajarshi/angular/AuthenticationSystem/src/app/user';



@Component({
  selector: 'adminuser-root',
 
 template:`
 <div *ngIf ="users">
 
  <div *ngFor ="let user of users">
  <div class="user-card text-center" [routerLink]="['/adminwork',user.id]">
  <img [src]="user.avatar" class="img-rounded">
    <h2>
      {{user.name}} 
      </h2>
      
      </div>
    </div>
    </div>
  `,

  providers:[AdminService]

})

export class AdminuserComponent {

 

      users:any[];
  

     
  constructor(private router:Router,private adminservice :AdminService){
  
  }

  ngOnInit(){



   
    this.adminservice.getusers().subscribe(users =>this.users = users);




  }


}