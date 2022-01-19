import React from "react";
import {useNavigate} from "react-router-dom";

const AdminRoute =({ children }) => {
    let navigate = useNavigate();

    let auth = localStorage.getItem('token');
    let user = JSON.parse(localStorage.getItem('user'));

    if(user && auth) {
        return children
    }

    if(!auth){
        navigate(`/login`)
        return null
    }
    if(!user.isadmin){
        navigate(`/profiles`)
        return null
    }

}
export default AdminRoute