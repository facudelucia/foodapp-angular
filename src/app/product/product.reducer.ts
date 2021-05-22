
import { Result } from './../interfaces/food.interface';

import { setProduct } from './product.actions'
import { createReducer, on } from '@ngrx/store';

export const initialState: Result = {}

const _productReducer = createReducer(initialState,
    on(setProduct, (state: Result, { product }) => product),
)


export function productReducer(state: any, action: any) {
    return _productReducer(state, action)
}