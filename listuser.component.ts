import { Component, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {

  users: User [] = [];
  userservce :UserserviceService= inject(UserserviceService);
 


  constructor() {
    this.users = this.userservce.getAllUsers() ;

  }

  
  //Delete
  deleteuser(id:number){
    this.userservce.deleteuser(id);
  }


  
}
