import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProductComponent } from './products/product/product.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { ProdDetailsDirective } from './directivies/prod-details.directive';
import { VendoEmailDirective } from './directivies/vendo-email.directive';
import { ProducttableComponent } from './admin/producttable/producttable.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditproductComponent } from './admin/editproduct/editproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    AdminComponent,
    ProductsComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ProductComponent,
    ProductdetailsComponent,
    ProdDetailsDirective,
    VendoEmailDirective,
    ProducttableComponent,
    AddproductComponent,
    EditproductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
