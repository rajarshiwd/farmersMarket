import { Component,OnInit } from '@angular/core';
import{Router,CanActivate} from '@angular/router';
import{ClientService} from './../services/client.service';
import {AuthService} from './../services/auth.service';
import{EventEmitter} from '@angular/core';
import {AdminService} from './../services/admin.service';



@Component({
  selector: 'adminwork-root',
  templateUrl: './adminwork.component.html',
  outputs:['childData'],
  providers:[ClientService,AuthService,AdminService]

})

export class AdminworkComponent {

  childData = new EventEmitter<string>();

      users:any[];
   omitEvent(value:string){
       this.childData.emit(value);
   }

     items:any[];
  constructor(private clientservice : ClientService,private authService : AuthService,private router:Router,private adminservice :AdminService){
  
  }

  ngOnInit(){



    this.clientservice.getPhotos().subscribe(items=>this.items=items);
    this.adminservice.getusers().subscribe(users =>this.users = users);




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