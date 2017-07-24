import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './guest.component.html',
  providers:[AuthService]
 
})

export class GuestComponent   {
   
    submitted: boolean = false;
    onSubmit(value:any){
    
        console.log(value);
        this.submitted= true;
 

  
}
}


