import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId = 0;
  product :any;
  constructor(public myActivated:ActivatedRoute , private myService:ProductsService , private myRouter:Router) {
    this.productId = myActivated.snapshot.params["id"];
   }

  ngOnInit(): void {
    // var productId = this.myActivated.snapshot.paramMap.get("id")
    this.myService.GetProductsByID(+this.productId).subscribe(
      {
        next:(data)=>{this.product=data},
        error:(err)=>{console.log(err);}

      }
    )
  }
  deleteProduct(){
    var con = confirm("Are you sure????");
    if(con){
    this.myService.DeleteProductByID(this.productId).subscribe(
      {
        next:()=>{this.myRouter.navigateByUrl('')},
        error:(err)=>{console.log(err)}

      }
    )
    alert("Deleted")
  }
}
}
