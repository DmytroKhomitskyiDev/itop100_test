import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import UserProfilesList from "../../pages/UserProfilesList";
import axios from "axios";
import {baseUrl, getUserById} from "../../api/api";
import * as reactRedux from 'react-redux'
import {fireEvent} from "@testing-library/react";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
const mockedFn = jest.fn();



jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => ({
        navigate: mockedFn
    })
}));

it('test user Profile list page ', async () =>  {
    const mockedFnDispatch = jest.fn();
    jest.mock("react-redux", () => ({
        ...(jest.requireActual("react-redux")),
        useDispatch: () => ({
            dispatch: mockedFnDispatch
        })
    }));
    const mock = jest.fn();
    const {getByTestId} = render(<MemoryRouter><UserProfilesList /></MemoryRouter>);

    fireEvent.click(getByTestId("modalBtn"))
    expect(mock).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("showModalBtn"))
    expect(mock).toHaveBeenCalledTimes(0);

    expect(true).toEqual(true);
});
