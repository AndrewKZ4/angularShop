import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
