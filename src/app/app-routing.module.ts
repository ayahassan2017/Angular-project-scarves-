import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductDetailsComponent  } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
{path:'' , component:ProductsComponent},
{path:'products' , component:ProductsComponent},
{path:'products/:id' , component:ProductDetailsComponent},
{path:'products/update/:id' , component:UpdateProductComponent},
{path:'products/add/newproduct' , component: NewProductComponent},
{path:'**' , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
