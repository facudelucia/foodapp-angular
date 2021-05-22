import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setProduct } from '../../product/product.actions'
import { addItem } from '../../chart/chart.actions'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  @Input() imagen!: string
  @Input() title!: string
  @Input() id!: any
  price!: number
  rating!: number[]
  constructor(private router: Router, private store: Store<AppState>) { }
  createArray() {
    const arr = []
    const num = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    for (let i = 0; i < num; i++) {
      arr.push(i)
    }
    return arr
  }
  ngOnInit(): void {
    this.price = Number((Math.random() * (50 - 1 + 1) + 1).toFixed(2))
    this.rating = this.createArray()
  }
  productSelected() {
    const product = { id: this.id, title: this.title, image: this.imagen, price: this.price, rating: this.rating }
    this.store.dispatch(setProduct({ product: product }))
    this.router.navigate(['/producto', this.id])
  }
  addProductChart() {
    const product = { id: this.id, title: this.title, image: this.imagen, price: this.price, rating: this.rating }
    this.store.dispatch(addItem({ product: product }))
  }
}
