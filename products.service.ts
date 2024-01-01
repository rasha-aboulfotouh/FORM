import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private apiurl ="https://fakestoreapi.com/products";

  constructor( private http: HttpClient) { }


  getdatafromapi():Observable < Products[] > {

    return this.http.get<Products[]>(this.apiurl);

  }





}


