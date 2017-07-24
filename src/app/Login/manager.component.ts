import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './../services/auth.service';

@Component({
  selector: 'admin-root',
  templateUrl: './manager.component.html',
  providers:[AuthService]
  
  
})
export class ManagerComponent {
credentials = { username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {}  

  /**
   * Login a user
   */
 
  login() {
    this.errorMessage = '';
    if(this.credentials.username!== "raja"){
this.errorMessage="Unregistred manager Name" ;
return false;

    }

    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this.router.navigate(['/managerwork']);
          console.log(data); 
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }
      );
  }

}