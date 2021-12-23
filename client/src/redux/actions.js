import {CREATE_USER} from "./actionType";

export const createUser = (id,username,email,password,isAdmin) => ({type:CREATE_USER, payload:{id,username,email,password,isAdmin}})