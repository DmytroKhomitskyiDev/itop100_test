import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

export const registerUserRequest = async (data) => {
    return axios.post(`http://localhost:4000/api/user/register`, data)
}

export const loginUserRequest = async (data) => {
    return axios.post(`http://localhost:4000/api/user/login`, data)
}

export const createProfileRequest = async (data, currentUserId) => {
    return instance.post(`private/profile/create/${currentUserId}`, data)
}

export const getProfilesRequest = async () => {
    return instance.get(`private/profiles/list`)
}

export const deleteProfileRequest = async (id) => {
    return instance.delete(`private/profile/${id}`)
}

export const editProfileRequest = async (values,id) => {
    return instance.put(`private/profile/update/${id}`, {...values})
}

export const getDashBoardRequest = async () => {
    return instance.get(`admin/dashboard`)
}

export const getUsersRequest = async () => {
    return instance.get(`admin/users`)
}

export const getUserById = async (id) => {
    return instance.get(`admin/user/${id}`)
}

export const editUserRequest = async (values,userId) => {
    return instance.put(`admin/user/${userId}`, {...values})
}

export const deleteUserRequest = async (userId) => {
    return instance.delete(`admin/user/${userId}`)
}



