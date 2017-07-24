import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './../services/auth.service';

@Component({
  selector: 'admin-root',
  templateUrl: './useer.component.html',
  providers:[AuthService]
 
  
})
export class UseerComponent implements OnInit{ 
 
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
    if(this.credentials.username!== "rajarshi yelamati"){
this.errorMessage="Unregistred client Name" ;
return false;

    }

    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this.router.navigate(['/clientorder']);
          console.log(data); 
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }
      );
  }

}