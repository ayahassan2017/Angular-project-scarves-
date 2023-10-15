import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private myService: ProductsService) { }
 products:any;
  ngOnInit(): void {
   this.myService.GetAllProducts().subscribe(
{
  next:(data)=>{this.products = data},
  error:(err)=>{console.log(err);
  }
}

   )
  }

}
