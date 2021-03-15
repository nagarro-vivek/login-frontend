import { initialState } from "../reducers/user.reducer"
import { getIsAuthenticated } from "./user.selector"

describe("User Selector", () => {
    it("Should return false for selector", () => {
        expect(getIsAuthenticated.projector(initialState)).toBe(false)
    })
})