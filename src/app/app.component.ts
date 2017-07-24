
import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';

import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
    public exportvalue:string;
  constructor(private authService: AuthService, private router: Router
  ) {}

  ngOnInit() {    
    
  }

  /**
   * Is the user logged in?
   */
    get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  /**
   * Log the user out
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
