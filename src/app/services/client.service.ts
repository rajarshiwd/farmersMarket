import{Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs';
@Injectable()

export class ClientService{


constructor(private http:Http){

}

getPhotos() {

 return this.http.get("http://127.0.0.1:8081/listUsers").map((res:Response)=>res.json().listUsers);

}


}