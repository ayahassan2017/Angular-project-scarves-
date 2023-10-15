import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId=0;
  product:any;
  constructor(myActivated:ActivatedRoute,private myService:ProductsService, private myRouter:Router) {
  this.productId = myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetProductsByID(this.productId).subscribe(
      {
        next:(data)=>{this.product=data},
        error:(err)=>{console.log(err);
        }

      }
    )
  }
  update(brnd:any,typ:any,pr:any,sz:any,col:any,img:any){
  var updatedProduct = {Brand:brnd , Type:typ , Price:pr , size:sz , color:col , img:img}
  this.myService.updateProduct(this.productId,updatedProduct).subscribe(
    {
      next:()=>{this.myRouter.navigateByUrl('')},
      error:(err)=>{console.log(err);
      }

    }
  );

}

}
