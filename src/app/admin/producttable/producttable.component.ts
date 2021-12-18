import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  constructor( public productService: ProductsService) { }

  ngOnInit(): void {
  }

  delProduct(id: number| undefined) {
      this.productService.delProduct(id as number)
  }
}
