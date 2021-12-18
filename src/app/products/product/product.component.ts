import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myVisible: boolean = false
  @Input('product') product!:Product
  constructor() { }

  ngOnInit(): void {
  }

}
