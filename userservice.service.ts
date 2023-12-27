import { Injectable } from '@angular/core';
import { User } from './user';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {



  //logic

  constructor() { }

  //get All Users

  getAllUsers(): User[] {

    return this.users;
  }



  //get specific user by id

  getUserById(id: number): User | undefined {

    return this.users.find(user => user.id === id);
  }


  //DELETE
  deleteUser(id: number) {
    const index = this.users.findIndex((user => user.id === id));
    this.users.splice(index, 1);
  }

  //address length
  usercount(): number {

    return this.users.length;
  }

  nextid = 5;

  createUser(user: User) {
    user.id = this.nextid++;
    this.users.push(user);
  }

// upDateUser //

  upDateUser(userid: number, updateduser: User) {

    const index = this.users.findIndex(user => user.id === userid);

    this.users[index] = { ...updateduser, id: userid }


  }



  //data //
  private users: User[] = [

    {
      id: 1,
      name: "Rasha",
      age: "22",
      email: "Rasha@gmail.com",
      address: "Q R",
      password: "1234"

    },
    {
      id: 2,
      name: "Maryam",
      age: "22",
      email: "Maryam@gmail.com",
      address: "Q R",
      password: "4321"

    },
    {
      id: 3,
      name: "Fatma",
      age: "22",
      email: "Fatma@gmail.com",
      address: "Q R",
      password: "2541"

    },
    {
      id: 4,
      name: "Shorouq",
      age: "22",
      email: "Shorouq@gmail.com",
      address: "Q R",
      password: "1452"

    },
  ]

}

