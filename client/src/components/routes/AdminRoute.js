import React from "react";
import {Navigate} from "react-router-dom";

const AdminRoute =({ children, ...rest }) => {

    let auth = localStorage.getItem('token');
    let user = JSON.parse(localStorage.getItem('user'));

    if(user.isadmin && auth) {
        return children
    }

    if(!auth) return <Navigate to="/login" />

    if(!user.isadmin) return <Navigate to="/profiles" />
}
export default AdminRoute