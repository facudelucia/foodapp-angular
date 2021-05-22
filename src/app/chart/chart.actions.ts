import { Result } from './../interfaces/food.interface';
import { createAction, props } from '@ngrx/store'

export const addItem = createAction('[Chart] Add Item', props<{ product: Result }>())
export const deleteAllItems = createAction(`[Chart] Delete All Items`)