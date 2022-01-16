import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Profiles from "../../pages/Profiles";
import {MemoryRouter} from "react-router-dom";
import {reducers} from "../../redux/store";
import {createStore} from "redux";
import {initialState} from "../../redux/profileReducer";

it('test redux store ',  () =>  {
    let store = createStore(reducers)
    expect(store.getState().profile).toEqual(initialState);
});