import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../../model";

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product!:Product

  constructor( public route:ActivatedRoute,public productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.product = this.productsService.getById(+params['id']) as Product
    })
  }

}
