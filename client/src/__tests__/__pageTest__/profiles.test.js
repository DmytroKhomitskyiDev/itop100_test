import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Profiles from "../../pages/Profiles";
import {MemoryRouter} from "react-router-dom";
import axios from "axios";
import {deleteProfileRequest, getProfilesRequest} from "../../api/api";

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
    }),
    delete: jest.fn((_url, _body) => {
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

it('test Profiles page ', async () =>  {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: true }));


    const catchFn = jest.fn();
    const thenFn = jest.fn();


    await getProfilesRequest().then(thenFn).catch(catchFn)


    expect(thenFn).toHaveBeenCalled();
    render(
        <MemoryRouter>
            <Profiles />
        </MemoryRouter>
    );
    expect(true).toEqual(true);
});

it('delete Profiles  ', async () =>  {

    axios.delete.mockImplementationOnce(() => Promise.resolve({ data: true }));
    const catchFn = jest.fn();
    const thenFn = jest.fn();
    await deleteProfileRequest().then(thenFn).catch(catchFn)
    expect(thenFn).toHaveBeenCalled();
    render(
        <MemoryRouter>
            <Profiles />
        </MemoryRouter>
    );
    expect(true).toEqual(true);
});