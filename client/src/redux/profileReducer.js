import {SET_ACTIVE_PROFILE, TOGGLE_IS_LOADER, TOGGLE_OPEN_MODAL_PROFILE} from "./actionType";
import {initialProfileValues} from "../helpers/constants";

export let initialState = {
    isModalVisible: false,
    activeProfile:initialProfileValues,
    isLoader:false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_OPEN_MODAL_PROFILE:
            return {
                ...state,
                isModalVisible: !state.isModalVisible
            }
        case SET_ACTIVE_PROFILE:
            return {
                ...state,
                activeProfile: action.payload
            }
        case TOGGLE_IS_LOADER:
            return {
                ...state,
                isLoader: !state.isLoader
            }

        default:
            return state

    }
}
export default profileReducer