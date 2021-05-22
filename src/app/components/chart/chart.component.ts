import { chartClosed } from './../../payment/payment.actions';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { deleteAllItems } from 'src/app/chart/chart.actions';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: [
  ]
})
export class ChartComponent implements OnInit {
  @Input() chartItems!: any
  @Input() total!: any
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  payment() {
    if (this.chartItems.length === 0) return
    Swal.fire(
      'Pago realizado',
      'Te avisaremos cuando llegue tu comida!',
      'success'
    )
    this.store.dispatch(chartClosed())
    this.store.dispatch(deleteAllItems())
  }
}
