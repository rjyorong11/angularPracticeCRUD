import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, employeeAddedSuccessfully } from './counter.actions';

export const initialState = {
    status: {
        newlyAddedEmployee: []
    }

};

const _counterReducer = createReducer(
    initialState,
    on(employeeAddedSuccessfully, (state, action) => ({
        ...state,
        status: {
            ...state.status,
            newlyAddedEmployee: [
                ...state.status.newlyAddedEmployee,
                {
                    employee: action
                }
            ]
        }
    }))
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}

