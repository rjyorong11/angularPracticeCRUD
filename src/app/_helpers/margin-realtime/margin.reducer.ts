import { createReducer, on } from '@ngrx/store';
import { deductMargin, addMargin } from './margin.actions';

export const initialState = {
    id: ''
}

const _marginModification = createReducer(
    initialState,
    on(deductMargin, (state, { id }) => ({ ...state, id: id })),
    on(addMargin, (state, { id }) => ({...state, id: id}))
)

export function marginModification(state, action) {
    return _marginModification(state, action);
}