import { Component, OnInit, Type } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private myService : ProductsService, private myRouter:Router) { }

  ngOnInit(): void {
  }
  RegForm = new FormGroup({
  Brand :  new FormControl("" , Validators.required ),
  Type : new FormControl("" , Validators.required ),
  Price : new FormControl("" , Validators.required ),
  size : new FormControl("" , Validators.required ),
  color : new FormControl("" , Validators.required ),
  img: new FormControl("")
  })
  AddProduct(){
    if(this.RegForm.valid){
var newProduct = this.RegForm.value;
this.myService.AddNewProduct(newProduct).subscribe(
  {
  next:()=>{this.myRouter.navigateByUrl('')},
  error:(err)=>{console.log(err);
  }
  }
);
      }else{
        alert("Not Valid")
      }
  }
}
