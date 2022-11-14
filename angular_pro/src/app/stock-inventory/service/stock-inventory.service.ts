import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs'

import { Product, Item } from '../pages/models/product.interface'

const dbJson = `{
    "cart": [
        {"product_id": 1, "quantity": 10},
        {"product_id": 2, "quantity": 50},
        {"product_id": 3, "quantity": 60}
    ],
    "products": [
        [
            {
                "id": 1,
                "price": 2800,
                "name": "McBook Pro"
            },
            {
                "id": 2,
                "price": 50,
                "name": "USB-C Adaptor"
            },
            {
                "id": 3,
                "price": 400,
                "name": "iPod"
            },
            {
                "id": 4,
                "price": 900,
                "name": "iPhone"
            },
            {
                "id": 5,
                "price": 600,
                "name": "Apple Watch"
            }
        ]
    ]
}`

@Injectable()
export class StockInventoryService  {
    constructor(
        private http: HttpClient
    ) {}

    getCartItems(): Observable <Item[]> {
        return of(JSON.parse(dbJson).cart)
    }

    getProducts(): Observable <Product[]> {
        return of(JSON.parse(dbJson).products)
    }
}
