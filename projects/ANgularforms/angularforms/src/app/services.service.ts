import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) {

   }
  private baseurl="http://localhost:8082/api/allproducts";
  
  private baseurl1="http://localhost:8082/api/addproduct";

  private baseurl2="http://localhost:8082/api/allproducts";
   getproducts():Observable<Product[]>
   {
     return this.http.get<Product[]>(`${this.baseurl}`);
   }
   addproducts(product:Product):Observable<Product>
   {
     return this.http.post<Product>(`${this.baseurl1}`,product);
   }
   getproductbyid(id:number):Observable<Product>
   {
                  return this.http.get<Product>(`${this.baseurl2}/${id}`)
   }
}
