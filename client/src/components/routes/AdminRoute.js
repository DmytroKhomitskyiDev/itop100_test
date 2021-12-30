import React from "react";
import {Navigate} from "react-router-dom";

const AdminRoute =({ children, ...rest }) => {

    let auth = localStorage.getItem('token');
    let user = JSON.parse(localStorage.getItem('user'));

    return user.isadmin && auth ? children : <Navigate to="/login" />
}
export default AdminRoute