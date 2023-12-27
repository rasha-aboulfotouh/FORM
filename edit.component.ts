import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {

  updateuserform! : FormGroup;
  userid!:number;


constructor( private formbuilder:FormBuilder ,private userservice :UserserviceService ,private route:ActivatedRoute  ){

  this.updateuserform =  this.formbuilder.group({
    name:['' ],
    age :[''],
    email:[''],
    add:[''],
    password:[''],

  })


}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.userid = +params['id'];
    this.loaduserDetails();
  });
}


loaduserDetails() {
  const useeee = this.userservice.getUserById(this.userid);

  if (useeee) {
    this.updateuserform.patchValue(useeee);
  } else {
    // Redirect to the product list if the product is not found
  
  }
}

upDateUser() {
  if (this.updateuserform.valid) {
    const updateduser: User = {
      id: this.userid,
      ...this.updateuserform.value
    };

    this.userservice.upDateUser(this.userid, updateduser);
  
  }
}



}
