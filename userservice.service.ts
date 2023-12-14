import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  //get All users

  getAllUsers():User[] {
    return this.users;
  }

  //get specific user by id

  getUserById(id:number):User |undefined {
    return this.users.find(user => user.id === id);
  }

 //DELETE
  deleteuser(id:number){
    const index = this.users.findIndex((user => user.id === id));
    this.users.splice(index,1);
  }

  //Add length
  usercount():number{
    return this.users.length;
  }

  createuser(user :User) {
    this.users.push(user);
  }









 //data
  private users :User[]= [
    {
      id: 1,
      name: "Rasha",
      age: 22,
      email: "Rasha@gmail.com",
      add: "Q R" ,
      password: "1234",

    },
    {
      id: 2,
      name: "Maryam",
      age: 22,
      email: "Maryam@gmail.com",
      add: "Q R" ,
      password: "1234",

    },
    {
      id: 3,
      name: "Fatma",
      age: 22,
      email: "Fatma@gmail.com",
      add: "Q R" ,
      password: "1234",

    },
    {
      id: 4,
      name: "Shorouq",
      age: 22,
      email: "Shorouq@gmail.com",
      add: "Q R" ,
      password: "1234",

    },
  ]



}
