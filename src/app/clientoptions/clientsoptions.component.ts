import { Component , OnInit} from '@angular/core';
import{ClientService} from './../services/client.service';


@Component({
  selector: 'clientoption-root',
  template:`
  <div *ngFor ="let photo of photos">

<img src="{{photo.url}}">

  </div>
  
  `,
 
  providers:[ClientService]
})
export class ClientoptionComponent implements OnInit{
  photos:any[];
  constructor(private service : ClientService){
  }

  ngOnInit(){



    this.service.getPhotos().subscribe(photos=>this.photos=photos);




  }
}