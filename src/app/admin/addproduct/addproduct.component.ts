import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  form!: FormGroup


  constructor(public productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productType: new FormControl(null, [Validators.required, Validators.minLength(4)] ),
      vendor: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      model: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      img: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required,Validators.min(0)]),
      vendorEmail: new FormControl(null, [Validators.email, Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])

    })

  }

  submit() {

    const formData = {...this.form.value}
    this.productsService.addNewProduct(formData)
    this.router.navigate(['admin/clear'])
  }
}
