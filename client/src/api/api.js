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
    return await axios.post(`http://localhost:4000/private/profile/create`, data, {headers: getHeaders()})
}

export const getProfilesRequest = async () => {
    return axios.get(`http://localhost:4000/private/profiles/list`, {headers: getHeaders()})
}

export const deleteProfileRequest = async (id) => {
   return  await axios.delete(`http://localhost:4000/private/profile/${id}`,{headers: getHeaders()})
}

export const editProfileRequest = async (values,id) => {
   return await axios.put(`http://localhost:4000/private/profile/update/${id}`, {...values},{headers: getHeaders()})
}

export const getDashBoardRequest = async () => {
   return await axios.get(`http://localhost:4000/admin/dashboard`,{headers: getHeaders()})
}

export const getUsersRequest = async () => {
    return axios.get(`http://localhost:4000/admin/users`, {headers: getHeaders()})
}
export const getUserById = async (id) => {
    return axios.get(`http://localhost:4000/admin/user/${id}`, {headers: getHeaders()})
}



