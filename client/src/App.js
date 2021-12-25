import React from "react";
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationUser from "./pages/RegistrationUser";
import Login from "./pages/Login";
import GlobalStyles from "./styles/globalStyles";
import Users from "./pages/Users";

function App() {
    return (
        <div>
            <GlobalStyles/>
            <Provider store={store}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<RegistrationUser />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/users" element={<Users />}/>
                </Routes>
              </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App;
