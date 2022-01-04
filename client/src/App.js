import React, {useEffect} from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationUser from "./pages/RegistrationUser";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import Users from "./pages/Users";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Dashboard from "./pages/Dashboard";
import UserProfilesList from "./pages/UserProfilesList";

function App() {

    useEffect(() => {

    },[])

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationUser />}/>
           <Route path="/login" element={<Login />}></Route>
          <Route path="/profiles" element={<PrivateRoute><Profiles /></PrivateRoute>}/>
          <Route path="/dashboard" element={<AdminRoute><Dashboard/></AdminRoute>}/>
          <Route path="/users" element={<AdminRoute><Users /></AdminRoute>}/>
          <Route path="/user/:id" element={<AdminRoute><UserProfilesList/></AdminRoute>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
