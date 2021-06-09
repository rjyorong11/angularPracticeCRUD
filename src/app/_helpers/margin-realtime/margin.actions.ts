import { createAction, props } from '@ngrx/store';

export const deductMargin = createAction(
    '[Margin] Deduct Margin',
    props<{
        id: string
    }>()
)

export const addMargin = createAction(
    '[Margin] Add Margin',
    props<{
        id: string
    }>()
)