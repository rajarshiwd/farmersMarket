import{Component,OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {AdminService} from './../services/admin.service' ;
import{ActivatedRoute} from '@angular/router';


@Component({

 template:`<div *ngIf="users">

<form  style="margin-top:40px" (ngSubmit)="Updateuser()" >

<label>
name
</label>
<div class="form-group">
<input type="text" class="form-control" name="name" [(ngModel)]="users.name"  >
</div>
<label>
username
</label>
<div class="form-group">
<input type="text" class="form-control" name="usernamename" [(ngModel)]="users.username"  >
</div>
<button class="btn btn-success btn-sm" type="submit">Update User</button>
    </form>



    `


})
export class AdminEditUserComponent implements OnInit {
    users:any[];

  constructor(private route : ActivatedRoute,private usersrvice : AdminService){

  }
  ngOnInit(){
    let id = this.route.snapshot.params['id'];
this.usersrvice.getuser(id).subscribe(users => this.users =users);


  }

UpdateUser(){

this.usersrvice.UdpateUser(this.users).subscribe(
  user=>console.log("user get updated"));


}



}