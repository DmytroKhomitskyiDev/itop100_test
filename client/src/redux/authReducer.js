import {CREATE_USER} from "./actionType";

let initialState = {
    id: null,
    username: null,
    email: null,
    password: null,
    isAdmin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
}
export default authReducer