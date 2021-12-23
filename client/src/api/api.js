import * as axios from "axios";

export const createUserRequest = async ({id,username,email,password,isAdmin}) => {
    return axios.post(`http://localhost:4000/api`)
}