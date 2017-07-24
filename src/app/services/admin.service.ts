import{Injectable} from '@angular/core';

import 'rxjs';

import { Http, Response, Headers } from '@angular/http';

import { Subject } from 'rxjs/Subject';

import { Observable } from "rxjs/Observable";
import {User} from 'C:/Users/rajarshi/angular/AuthenticationSystem/src/app/user';



@Injectable()

export class AdminService{
    usersUrl:string = "https://reqres.in/api/users";
users:User;
constructor(private http :Http){

}

  getusers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(res => res.json().data)
      .map(users => users.map(this.toUser))
      .catch(this.handleError);
  }

// for id routing 
getuser(id:number):Observable<User>{
 return this.http.get(`${this.usersUrl}/${id}`)
      .map(res => res.json().data)
      .map(this.toUser)
      .catch(this.handleError);

}

//// reformating the api's data into coustmised one
 private toUser(user): User {
    return {
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      username: user.first_name,
      avatar: user.avatar
    };
  }
  /// update the user

  UdpateUser(user:User) : Observable<User>{

    return this.http.put(`${this.usersUrl}/${user.id}`,user)
           .map(res=>res.json())
           .catch(this.handleError);
  }

 private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }




}