import * as axios from "axios";

const getHeaders = () => {
    return {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

export const registerUserRequest = async (data) => {
    return axios.post(`http://localhost:4000/api/user/register`, data)
}

export const loginUserRequest = async (data) => {
    return axios.post(`http://localhost:4000/api/user/login`, data)
}



export const createProfileRequest = async (data) => {
    return axios.post(`http://localhost:4000/private/profile/create`, data, {headers: getHeaders()})
}

export const getProfilesRequest = async () => {
    return axios.get(`http://localhost:4000/private/profile`, {headers: getHeaders()})
}




