import { loginUserFailure, loginUserSuccess } from "../actions/user.action"
import { initialState, userLoginReducer } from "./user.reducer"

describe("User Login Reducer", () => {
    it("Login user success reducer", () => {
        let state = userLoginReducer(initialState, loginUserSuccess)
        expect(state.isAuthenticated).toBeTrue()
    })
    it("Login user failure reducer", () => {
        let state = userLoginReducer(initialState, loginUserFailure)
        expect(state.isAuthenticated).toBeFalse()
    })
})