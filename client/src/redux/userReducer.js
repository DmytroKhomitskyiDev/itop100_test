import {SET_USER} from "./actionType";

let initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state

    }
}
export default userReducer