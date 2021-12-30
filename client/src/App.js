import React, {useEffect} from "react";
import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationUser from "./pages/RegistrationUser";
import Login from "./pages/Login";
import GlobalStyles from "./styles/globalStyles";
import Profiles from "./pages/Profiles";
import Users from "./pages/Users";
import {setUser} from "./redux/actions";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Dashboard from "./pages/Dashboard";

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
          <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
