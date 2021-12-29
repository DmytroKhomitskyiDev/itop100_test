import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import GlobalStyles from "./styles/globalStyles";
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
ReactDOM.render(
        <div>
            <GlobalStyles/>
              <Provider store={store}>
                <App />
            </Provider>
        </div>,
 document.getElementById('root')
 );

