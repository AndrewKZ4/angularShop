import { Injectable } from '@angular/core';
import {Product} from "../model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private count =4
  products: Product[] = [
    {
      id: 1,
      productType: "Телефон",
      vendor: "Nokia",
      model:"3310",
      price: 7000,
      img:"https://via.placeholder.com/300" ,
      count: 13,
      vendorEmail: "sales@nokia.com",
      description:"Только не роняйте себе на ногу"
    },
    {
      id: 2,
      productType: "Спортивный инвентарь",
      vendor: "Нил дракман",
      model:"Сломаная клюшка для гольфа",
      price: 7000,
      img:"https://via.placeholder.com/300" ,
      count: 1,
      vendorEmail: "sales@sony.com",
      description:"Смертельно опасна белым мужикам"
    },
    {
      id: 3,
      productType: "Одежда",
      vendor: "Кто его знает",
      model:"Немного рваный носок",
      price: 7000,
      img:"https://via.placeholder.com/300" ,
      count: 13,
      vendorEmail: "sales@cocacola.com",
      description:"Носить нельзя, но можно повесить на камин для подарков Санта Клауса"
    },
    {
      id: 4,
      productType: "Запчасти",
      vendor: "Мишелин",
      model:"Шина стертая",
      price: 7000,
      img:"https://via.placeholder.com/300" ,
      count: 13,
      vendorEmail: "sales@michelin.com",
      description:"Колесо от формулы один самого Шумахера. Использовать нельзя, зато какой сувенир!"
    },

  ]

  constructor() { }

  getById(id: number) :Product | undefined {
    return this.products.find(p => p.id === id)
  }
  addNewProduct(product: Product){
    this.count++
    product.id=this.count;

    this.products.push(product)
  }

  delProduct(id: number) {
    this.products = this.products.filter(p=>p.id !==id)
  }

  updateProduct(product: Product)
  {
    const index = this.products.find(p=>p.id==product.id)
    if (index){

      this.products[index.id as number] = product
    }

  }

}
