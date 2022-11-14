import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Observable } from 'rxjs'
import { forkJoin } from 'rxjs';

import { StockInventoryService } from '../../service/stock-inventory.service';

import { Product, Item } from '../../pages/models/product.interface'

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) {}

  productMap!: Map<number, Product>

  products!: Product[]

  form =  this.fb.group({
    store:  this.fb.group({
      branch: '',
      code: ''
    }),

    selected: this.createStock({}),

    stock:this.fb.array([])
  })

  createStock(stock: any) {
    return this.fb.group({
      product_id: stock.product_id || '',
      quantity: stock.quantity || 10
    })
  }

   onSubmit() {
    console.log('Submit', this.form.value)
  }

  addStock(stock: any){
    const control = this.form.get('stock') as FormArray
    control.push(this.createStock(stock.value))
  }

  removeStock({ group, index }: {group: FormGroup, index: number}) {
    const control = this.form.get('stock') as FormArray
    control.removeAt(index)
  }

  ngOnInit() {
    const cart = this.stockService.getCartItems()
    const products = this.stockService.getProducts()

    forkJoin({cart, products})
    .subscribe(([cart, products]: [Item[], Product[]]) => {
      
      const myMap = products.map<[number, Product]>(product => [product.id, product])
      const myMapCart = products.map<[number, Product]>(product => [product.id, product])

      console.log(myMap)
    })
  }
}
