import { createStore } from "redux"
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment': state + 1
        case 'Increment': state - 1
        default: return state;
    }
}
export const store = createStore(reducer);