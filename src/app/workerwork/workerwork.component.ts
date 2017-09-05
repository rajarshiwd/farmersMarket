<<<<<<< HEAD
import { Component,OnInit } from '@angular/core';
import{Router,CanActivate} from '@angular/router';
import{ClientService} from './../services/client.service';
import {AuthService} from './../services/auth.service';
import{EventEmitter} from '@angular/core';
import {AdminService} from './../services/admin.service';



@Component({
  selector: 'workerwork-root',
  templateUrl: './workerwork.component.html',

  providers:[ClientService,AuthService,AdminService]

})

export class WorkerworkComponent {

  childData = new EventEmitter<string>();

      users:any[];
   omitEvent(value:string){
       this.childData.emit(value);
   }

     items:any[];
  constructor(private clientservice : ClientService,private authService : AuthService,private router:Router){
  
  }

  ngOnInit(){



    this.clientservice.getPhotos().subscribe(items=>this.items=items);
    




  }

 get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  /**
   * Log the user out
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
=======
import { Component,OnInit } from '@angular/core';
import{Router,CanActivate} from '@angular/router';
import{ClientService} from './../services/client.service';
import {AuthService} from './../services/auth.service';
import{EventEmitter} from '@angular/core';
import {AdminService} from './../services/admin.service';



@Component({
  selector: 'workerwork-root',
  templateUrl: './workerwork.component.html',

  providers:[ClientService,AuthService,AdminService]

})

export class WorkerworkComponent {

  childData = new EventEmitter<string>();

      users:any[];
   omitEvent(value:string){
       this.childData.emit(value);
   }

     items:any[];
  constructor(private clientservice : ClientService,private authService : AuthService,private router:Router){
  
  }

  ngOnInit(){



    this.clientservice.getPhotos().subscribe(items=>this.items=items);
    




  }

 get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  /**
   * Log the user out
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
>>>>>>> 8975246dc984f3e33782c89937a63c88f919eccd
}