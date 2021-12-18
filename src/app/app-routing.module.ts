import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProductsComponent} from "./products/products.component";
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./admin/admin.component";
import {ProductdetailsComponent} from "./products/productdetails/productdetails.component";
import {AddproductComponent} from "./admin/addproduct/addproduct.component";
import {EditproductComponent} from "./admin/editproduct/editproduct.component";



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductsComponent},
  {path:'auth',component:AuthComponent},
  {path:'admin',component:AdminComponent, children:[
      {path:'add', component: AddproductComponent},
      {path:'clear', redirectTo: '/admin', pathMatch:'full' },

    ]},
  {path: 'products/:id', component:ProductdetailsComponent},
  {path: 'admin/editproduct/:id', component:EditproductComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
