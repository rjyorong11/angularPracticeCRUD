import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, employeeAddedSuccessfully, deleteEmployee } from './counter.actions';

export const initialState = []
// {
//     newlyAddedEmployee: []
// };

const _counterReducer = createReducer(
    initialState,
    on(employeeAddedSuccessfully, (state, action) => [...state, {employee: action}]),
    on(deleteEmployee, (state,  { index } ) => {
        const array = [...state]
        array.splice(index, 1)
        return array;
        
    })
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}

