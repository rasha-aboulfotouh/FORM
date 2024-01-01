import { Component, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {



  /////// ********//////
  users: User[] = [];
  userservce: UserserviceService = inject(UserserviceService);
  /// **** ///

  varapi!: Products[];

  productserve: ProductsService = inject(ProductsService);
  router: any;


  /////  ****** //////


  constructor() {

    this.productserve.getdatafromapi().subscribe((data: Products[]) => { this.varapi = data });


    /////
    this.users = this.userservce.getAllUsers();
  }

  //***// *//
  addTocard(item: any) {
    console.log('item added to card:', item);
  }


  showDetails(itemid: any) {
    console.log('show details for:', itemid);
    this.router.navigate(['detailproduct', itemid])


  }








  ///****// ***///

  //Delete
  deleteuser(id: number) {
    this.userservce.deleteUser(id);
  }



}
