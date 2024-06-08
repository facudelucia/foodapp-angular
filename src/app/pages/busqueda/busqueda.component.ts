import { FoodServiceService } from './../../services/food-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/interfaces/food.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit, OnDestroy {
  busquedaSubscription!: Subscription
  items: Result[] = []
  isLoading: boolean = false
  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.busquedaSubscription = this.activatedRoute.params.subscribe(params => {
      this.isLoading = true
      this.foodService.getFoods(params.termino)
        .subscribe(items => {
          this.items = items.results!
          this.isLoading = false
        })
    })

  }
  ngOnDestroy() {
    this.busquedaSubscription.unsubscribe()
  }
}
