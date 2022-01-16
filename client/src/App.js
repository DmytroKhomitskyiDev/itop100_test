import React, {useEffect} from "react";
import './App.css';
import {  Routes, Route } from "react-router-dom";
import RegistrationUser from "./pages/RegistrationUser";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import Users from "./pages/Users";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Dashboard from "./pages/Dashboard";
import UserProfilesList from "./pages/UserProfilesList";
import ProfileFormModal from "./components/ProfileFormModal/ProfileFormModal";
import NotFound from "./pages/NotFound";
import HomePageRoute from "./components/routes/HomePageRoute";

function App() {

    return (
        <div>
            <Routes>
                <Route index element={<HomePageRoute><RegistrationUser /></HomePageRoute>} />
                <Route path="/register" element={<RegistrationUser />}/>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/profiles" element={<PrivateRoute><Profiles /></PrivateRoute>}/>
                <Route path="/dashboard" element={<AdminRoute><Dashboard/></AdminRoute>}/>
                <Route path="/users" element={<AdminRoute><Users /></AdminRoute>}/>
                <Route path="/user/:id" element={<AdminRoute><UserProfilesList/></AdminRoute>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <div>
                <ProfileFormModal/>
            </div>
        </div>

    )
}

export default App;
