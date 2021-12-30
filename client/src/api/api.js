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

export const getUsersRequest = async () => {
    return axios.get(`http://localhost:4000/api/users`, {headers: getHeaders()})
}

export const createProfileRequest = async (data) => {
    return axios.post(`http://localhost:4000/private/profile/create`, data, {headers: getHeaders()})
}

export const getProfilesRequest = async () => {
    return axios.get(`http://localhost:4000/private/profiles/list`, {headers: getHeaders()})
}

export const deleteProfileRequest = async (id) => {
    await axios.delete(`http://localhost:4000/private/profile/${id}`,{headers: getHeaders()})
}

export const editProfileRequest = async (values,id) => {
    await axios.put(`http://localhost:4000/private/profile/update/${id}`, {...values},{headers: getHeaders()})
}




