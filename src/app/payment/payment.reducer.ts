import { createReducer, on } from '@ngrx/store'
import { chartOpen, chartClosed } from './payment.actions'


export interface State {
    isOpen: boolean
}
export const initialState: State = {
    isOpen: false
}
const _paymentReducer = createReducer(initialState,
    on(chartOpen, state => ({ ...state, isOpen: true })),
    on(chartClosed, state => ({ ...state, isOpen: false }))
)

export function paymentReducer(state: any, action: any) {
    return _paymentReducer(state, action)
}