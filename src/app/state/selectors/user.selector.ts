import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserLoginState } from "../reducers/user.reducer";

const userAuthenticationSelector = createFeatureSelector<UserLoginState>('userLogin')

export const getIsAuthenticated = createSelector(userAuthenticationSelector, state => state.isAuthenticated)