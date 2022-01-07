import {SET_ACTIVE_PROFILE, SET_USER, TOGGLE_IS_LOADER, TOGGLE_OPEN_MODAL_PROFILE} from "./actionType";

export const setUser = (user) => ({type: SET_USER, payload:user})
export const toggleOpenModalProfile = () => ({type: TOGGLE_OPEN_MODAL_PROFILE})
export const setActiveProfile = (payload) => ({type: SET_ACTIVE_PROFILE,payload})
export const toggleIsLoader = () => ({type: TOGGLE_IS_LOADER})





