import React from "react";
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationUser from "./pages/RegistrationUser";

function App() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RegistrationUser />}/>
            </Routes>
          </BrowserRouter>
        </Provider>
    )
}

export default App;
