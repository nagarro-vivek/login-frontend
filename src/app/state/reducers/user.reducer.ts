import { createReducer, on } from '@ngrx/store'
import { loginUserSuccess, loginUserFailure } from '../actions/user.action';

export interface UserLoginState {
    isAuthenticated : boolean
}

export const initialState: UserLoginState = {
    isAuthenticated: false
}

export const userLoginReducer = createReducer(initialState,

    on(loginUserSuccess, (state) => ({
        ...state,
        isAuthenticated: true
    })),

    on(loginUserFailure, (state) => ({
        ...state,
        isAuthenticated: false
    }))
);