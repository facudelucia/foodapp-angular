import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { Result } from 'src/app/interfaces/food.interface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  
  items: Result[] = []
  isOpen: boolean = false
  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.foodService.chart$.subscribe(items => {
      this.items = items
    })
  }
  toggleCarrito() {
    if (this.isOpen) {
      this.isOpen = false
      this.foodService.chartClosed()
    } else {
      this.isOpen = true
      this.foodService.chartOpen()
    }
  }
}
