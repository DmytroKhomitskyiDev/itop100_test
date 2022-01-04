import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import user from "../../image/avatarUser.svg"
import userAdmin from "../../image/avatarAdmin.svg"
import profile from "../../image/icons/profile.svg"
import users from "../../image/icons/users.svg"
import dashboard from "../../image/icons/dashbord.svg"
import {SHeader} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {SET_USER} from "../../redux/actionType";
import {setUser} from "../../redux/actions";

const Header = () => {
    let navigate = useNavigate();

    const dispatch = useDispatch()
    const currentUser = useSelector( state => {
        return state.user.user
    })

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(setUser({}))
        navigate('/login')
    }

    return (
        <SHeader>
            <div className="container">
                <div className="logo">
                    <Link to={"/"}><img src={currentUser.isadmin ? userAdmin : user} alt="user"/> <span className={'logoTitle'}>{currentUser.username}</span></Link>
                </div>
                <nav>
                    <ul className={'nav'}>
                        <li className="navList"><Link to={'/profiles'}><span>Profiles</span><img src={profile} alt="profile"/></Link></li>
                        <li className="navList"><Link to={'/dashboard'}><span>Dashboard</span><img src={dashboard} alt="dashboard"/></Link></li>
                        <li className="navList"><Link to={'/users'}><span>Users</span><img src={users} alt="users"/></Link></li>
                    </ul>
                    <ul className={'logout'}>
                        <li onClick={()=> handleLogOut()}><span style={{cursor:"pointer"}} >Log out</span></li>
                    </ul>
                </nav>
            </div>
        </SHeader>
    )
}

export default Header


