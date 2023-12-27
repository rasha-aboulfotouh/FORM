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

  // submitApplication() {
  //   throw new Error('Method not implemented.');
  // }


  // submit() {
  //   throw new Error('Method not implemented.');
  // }

  // form!: FormGroup;

  // users: number = 10;
  // saveuser: User[] = [];



  

  ///****////


  ////****/////

  user!: User[];

  userservce: UserserviceService = inject(UserserviceService);

//***/// *//
  userform!: FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.userform = this.formBuilder.group({
      name: [''],
      age: [''],
      email: [''],
      address: [''],
      password: [''],

    })

    this.user = this.userservce.getAllUsers();

  }


  ///      *******     ///
  adduser(){

    const user: User = this.userform.value;
    this.userservce.createUser(user);
    console.log(user);
  }





}




