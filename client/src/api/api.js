import * as axios from "axios";
const baseUrl = 'http://localhost:4000/';

const getHeaders = () => {
    return {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

export const registerUserRequest = async (data) => {
    return axios.post(`${baseUrl}api/user/register`, data)
}

export const loginUserRequest = async (data) => {
    return axios.post(`${baseUrl}api/user/login`, data)
}

export const createProfileRequest = async (data, currentUserId) => {
    return axios.post(`${baseUrl}private/profile/create/${currentUserId}`, data, { headers: getHeaders() })
}

export const getProfilesRequest = async () => {
    return axios.get(`${baseUrl}private/profiles/list`, { headers: getHeaders() })
}

export const deleteProfileRequest = async (id) => {
    return axios.delete(`${baseUrl}private/profile/${id}`, { headers: getHeaders() })
}

export const editProfileRequest = async (values,id) => {
    return axios.put(`${baseUrl}private/profile/update/${id}`, {...values}, { headers: getHeaders() })
}

export const getDashBoardRequest = async () => {
    return axios.get(`${baseUrl}admin/dashboard`, { headers: getHeaders() })
}

export const getUsersRequest = async () => {
    return axios.get(`${baseUrl}admin/users`, { headers: getHeaders() })
}

export const getUserById = async (id) => {
    return axios.get(`${baseUrl}admin/user/${id}`, { headers: getHeaders() })
}

export const editUserRequest = async (values,userId) => {
    return axios.put(`${baseUrl}admin/user/${userId}`, {...values}, { headers: getHeaders() })
}

export const deleteUserRequest = async (userId) => {
    return axios.delete(`${baseUrl}admin/user/${userId}`, { headers: getHeaders() })
}



