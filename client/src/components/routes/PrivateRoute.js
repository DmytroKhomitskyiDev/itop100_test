import React from "react";
import {Navigate, useNavigate} from "react-router-dom";

const PrivateRoute =({ children }) => {
    let navigate = useNavigate();
    let auth = localStorage.getItem('token');
    if(auth){
        return children
    } else {
        navigate("/login")
        return null
    }

}
export default PrivateRoute