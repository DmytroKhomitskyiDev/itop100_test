// import React from "react";
// import {Link} from "react-router-dom";
// import user from "../../image/avatarUser.svg"
// import profile from "../../image/icons/profile.svg"
// import users from "../../image/icons/users.svg"
// import dashboard from "../../image/icons/dashbord.svg"
// import style from './Header.module.css'
//
// const Header = () => {
//     return (
//         <header className={style.header}>
//             <div className="logo">
//                 <Link to={"/"}><img src={user} alt="user"/> <span>User</span></Link>
//             </div>
//
//             <nav>
//                 <ul>
//                     <li><Link to={'/login'}><span>Profiles</span><img src={profile} alt="profile"/></Link></li>
//                     <li><Link to={'/login'}><span>Dashboard</span><img src={dashboard} alt="dashboard"/></Link></li>
//                     <li><Link to={'/login'}><span>Users</span> <img src={users} alt="users"/></Link></li>
//                 </ul>
//                 <ul>
//                     <li><Link to={'/'}>Log out</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
//
// export default Header