import { Result } from './../interfaces/food.interface';
import { addItem, deleteAllItems } from './chart.actions'
import { createReducer, on } from '@ngrx/store'

export const initialState: Result[] = []

const _chartReducer = createReducer(initialState,
    on(addItem, (state, { product }) => [...state, product]),
    on(deleteAllItems, (state) => [])
)

export function chartReducer(state: any, action: any) {
    return _chartReducer(state, action)
}