import { Component, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  form! :FormGroup;

  users: number = 10;
  saveuser : User[] = [];


  userservce :UserserviceService= inject(UserserviceService);

  formBuilder! :FormBuilder;


  constructor() {

    this.saveuser = this.userservce.getAllUsers();

    this.users = this.userservce.usercount();
  }


    // ngOnInit():void {

    //   this.form = this.formBuilder.group(
    //     {
    //       id:[]
  
    //     }
    //   )

    // }



    // save()

    // this.saveuser = this.form.value;

    // alert()


}
