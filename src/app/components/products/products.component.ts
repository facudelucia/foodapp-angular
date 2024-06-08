import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/food.interface';
import { FoodServiceService } from 'src/app/services/food-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  @Input() item: Result = {}
  constructor(private router: Router, private foodService: FoodServiceService) { }
  createArray() {
    const arr = []
    const num = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    for (let i = 0; i < num; i++) {
      arr.push(i)
    }
    return arr
  }
  ngOnInit(): void {
    this.item.price = Number((Math.random() * (50 - 1 + 1) + 1).toFixed(2))
    this.item.rating = this.createArray()
  }
  productSelected() {
    const product = this.item
    this.foodService.setProduct(product)
    this.router.navigate(['/producto', this.item.id])
  }
  addProductChart() {
    const product = this.item
    this.foodService.addItem(product)
  }
}
