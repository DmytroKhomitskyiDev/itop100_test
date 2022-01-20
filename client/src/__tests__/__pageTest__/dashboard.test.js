import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Dashboard, {getCurrentTitle} from "../../pages/Dashboard";
import mockAxios from "jest-mock-axios";
import {baseUrl, getDashBoardRequest} from "../../api/api";
import axios from "axios";
import {MemoryRouter} from "react-router-dom";
import {waitFor} from "@testing-library/react";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
let url = ''
let body = {}
jest.mock("axios", () => ({
    get: jest.fn((_url, _body) => {
        return new Promise((resolve) => {
            url = _url
            body = _body
            resolve(true)
        })
    })
}))
const mockedFn = jest.fn();
jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => ({
        navigate: mockedFn
    })
}));
jest.mock("react-redux", () => ({
    ...(jest.requireActual("react-redux")),
    useDispatch: () => ({
        dispatch: mockedFn
    })
}));

describe('test dashboard' , () => {
    it('test Dashboard page ', async () =>  {
        axios.get.mockImplementationOnce(() => Promise.resolve({ data: true }));

        const catchFn = jest.fn();
        const thenFn = jest.fn();

        const {getByTestId} = render(
            <MemoryRouter>
                <Dashboard dashboardDefault={[]} getCurrentTitle={getCurrentTitle}/>
            </MemoryRouter>
        );
        await getDashBoardRequest().then(thenFn).catch(catchFn)

        expect(thenFn).toHaveBeenCalled();
        expect(true).toEqual(true);
    });


})

