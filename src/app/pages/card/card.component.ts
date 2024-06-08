import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { Result } from 'src/app/interfaces/food.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit, OnDestroy {
  productSubscription!: Subscription
  item: Result = {}
  constructor(private router: Router, private location: Location, private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.productSubscription = this.foodService.product$.subscribe(product => {
      if (!product.title) {
        this.router.navigate(['/'])
      } else {
        this.item = product
      }
    })
  }
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }
  volver() {
    this.location.back()
  }
}
