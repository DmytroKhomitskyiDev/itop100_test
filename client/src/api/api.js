import * as axios from "axios";

export const registerUserRequest = async (data) => {
    return axios.post(`http://localhost:4000/api/user/register`, data)
}

export const loginUserRequest = async (data) => {
    console.log(data)
    return axios.post(`http://localhost:4000/api/user/login`, data)
}