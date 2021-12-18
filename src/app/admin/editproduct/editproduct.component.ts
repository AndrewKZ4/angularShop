import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../model";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  form!: FormGroup
  product!:Product


  constructor( public route:ActivatedRoute, public productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.product = this.productsService.getById(+params['id']) as Product
    })

    this.form = new FormGroup({
      id: new FormControl(this.product.id),
      productType: new FormControl(this.product.productType, [Validators.required, Validators.minLength(4)] ),
      vendor: new FormControl(this.product.vendor, [Validators.required, Validators.minLength(4)]),
      model: new FormControl(this.product.model, [Validators.required, Validators.minLength(4)]),
      price: new FormControl(this.product.price, [Validators.required, Validators.min(1)]),
      img: new FormControl(this.product.img, [Validators.required]),
      count: new FormControl(this.product.count, [Validators.required,Validators.min(0)]),
      vendorEmail: new FormControl(this.product.vendorEmail, [Validators.email, Validators.required]),
      description: new FormControl(this.product.description, [Validators.required, Validators.minLength(10)])

    })
  }

  submit() {
    const formData = {...this.form.value}
    this.productsService.updateProduct(formData)
    this.router.navigate(['admin/clear'])

  }
}
