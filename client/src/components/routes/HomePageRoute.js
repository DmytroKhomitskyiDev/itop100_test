import React from "react";
import {Navigate} from "react-router-dom";

const HomePageRoute =({ children }) => {

    let auth = localStorage.getItem('token');
    let user = JSON.parse(localStorage.getItem('user'));
    if(user) return <Navigate to="/profiles" />
    if(!user && !auth) {
        return children
    }
}
export default HomePageRoute