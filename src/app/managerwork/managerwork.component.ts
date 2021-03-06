import { Component,OnInit } from '@angular/core';
import{Router,CanActivate} from '@angular/router';
import{ClientService} from './../services/client.service';
import {AuthService} from './../services/auth.service';
import{EventEmitter} from '@angular/core';
import {AdminService} from './../services/admin.service';



@Component({
  selector: 'managerwork-root',
  templateUrl: './managerwork.component.html',

  providers:[ClientService,AuthService,AdminService]

})

export class ManagerworkComponent {

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
}