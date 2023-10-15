import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  static AddProduct(newProduct: Partial<{ Brand: string | null; Type: string | null; Price: string | null; size: string | null; color: string | null; }>) {
    throw new Error('Method not implemented.');
  }

  constructor(private myClient:HttpClient) { }
  private BaseURL = 'http://localhost:3000/products'
  // CRUD
GetAllProducts(){
  return this.myClient.get(this.BaseURL)
}
GetProductsByID(id:number){
  return this.myClient.get(this.BaseURL+ "/" +id)
}
updateProduct(id:number , body :any){
  return this.myClient.put(this.BaseURL+"/"+id, body)
}
AddNewProduct(body:any){
  return this.myClient.post(this.BaseURL,body)
}
DeleteProductByID(id:number){
 return this.myClient.delete(this.BaseURL+"/"+id)
}
}
