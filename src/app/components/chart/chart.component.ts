import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FoodServiceService } from 'src/app/services/food-service.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: [
  ]
})
export class ChartComponent implements OnInit {
  @Input() chartItems!: any
  @Input() total!: any
  constructor(private foodService: FoodServiceService) { }

  ngOnInit(): void {
  }
  payment() {
    if (this.chartItems.length === 0) return
    Swal.fire(
      'Pago realizado',
      'Te avisaremos cuando llegue tu comida!',
      'success'
    )
    this.foodService.chartClosed()
    this.foodService.deleteAllitems()
  }
}
