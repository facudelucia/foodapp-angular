
import { FoodServiceService } from './../../services/food-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/interfaces/food.interface';

interface Avatar {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})


export class HomeComponent implements OnInit, OnDestroy{
  items: Result[] = []
  options: Avatar[] = [{ name: 'Pizza', icon: 'fas fa-pizza-slice' }, { name: 'Burger', icon: 'fas fa-hamburger' }, { name: 'Pasta', icon: 'fas fa-utensils' }, { name: 'Meat', icon: 'fas fa-bacon' }, { name: 'Sushi', icon: 'fas fa-stroopwafel' }, { name: 'Rice', icon: 'fas fa-utensils' }, { name: 'Salad', icon: 'fas fa-carrot' }, { name: 'Chicken', icon: 'fas fa-drumstick-bite' }, { name: 'Ice Cream', icon: 'fas fa-ice-cream' }, { name: 'Dessert', icon: 'fas fa-cookie' }]
  get randomOption(){
    return this.options[Math.floor(Math.random() * this.options.length)]
  }
  constructor(private foodService: FoodServiceService) { }
  foodSubscription!: Subscription
  ngOnInit(): void {
    this.foodSubscription = this.foodService.getFoods(this.randomOption.name)
      .subscribe((foods: any) => {
        this.items = foods.results
      })
  }
  ngOnDestroy(): void {
    this.foodSubscription.unsubscribe()
  }
}
