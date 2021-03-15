import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
    '[User] Login Users',
    props<{ data: any }>()
);

export const loginUserSuccess = createAction(
    '[User] Login User Success'
);

export const loginUserFailure = createAction(
    '[User] Login User Failure'
);