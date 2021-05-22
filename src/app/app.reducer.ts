import { Result } from './interfaces/food.interface';
import { ActionReducerMap } from '@ngrx/store';
import { chartReducer } from './chart/chart.reducer';
import { productReducer } from './product/product.reducer';
import { paymentReducer } from './payment/payment.reducer';
import * as payment from './payment/payment.reducer'

export interface AppState {
    chart: Result[],
    product: Result,
    payment: payment.State
}

export const appReducers: ActionReducerMap<AppState> = {
    chart: chartReducer,
    product: productReducer,
    payment: paymentReducer
}