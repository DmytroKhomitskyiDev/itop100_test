import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers({
    user: userReducer
})

let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
export default store