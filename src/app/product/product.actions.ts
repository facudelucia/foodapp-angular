import { Result } from './../interfaces/food.interface';
import { createAction, props } from '@ngrx/store';

export const setProduct = createAction('[Product] Set Product', props<{ product: Result }>())