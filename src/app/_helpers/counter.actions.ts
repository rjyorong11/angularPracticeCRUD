import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const employeeAddedSuccessfully = createAction(
    '[Employee/Added] Added Successfully',
    props<{
        employee: any;
    }>()
);

export const deleteEmployee = createAction(
    '[Employee/Added] Deleted Successfully',
    props<{ 
        index: number; 
    }>()
)