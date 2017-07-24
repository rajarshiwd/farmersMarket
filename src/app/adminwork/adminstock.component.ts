import { Component,OnInit } from '@angular/core';
import{Router,CanActivate} from '@angular/router';
import{ClientService} from './../services/client.service';






@Component({
  selector: 'adminstock-root',
 
 
  template:`
 <h3>list of stock</h3>
<table class="table table-bordered">
    <thead>
      <tr>
        <th>code</th>
        <th>Name</th>
        <th>Quality description</th>
      </tr>
    </thead>
    <tbody>

<tr *ngFor="let customer of items">
<td>{{customer.id}}</td>
<td>{{customer.title}}</td>
<td>{{customer.body}}</td>
</tr>
</tbody>
</table>
`,


 
  providers:[ClientService,]

})

export class AdminstockComponent {

 


     items:any[];
  constructor(private clientservice : ClientService,private router:Router){
  
  }

  ngOnInit(){



    this.clientservice.getPhotos().subscribe(items=>this.items=items);
    




  }

 

  
 
}