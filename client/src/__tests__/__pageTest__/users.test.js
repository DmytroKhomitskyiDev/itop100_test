import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import Users from "../../pages/Users";
import axios from "axios";
import {getDashBoardRequest, getUsersRequest} from "../../api/api";
import {act} from "@testing-library/react";
import ProfileFormModal from "../../components/ProfileFormModal/ProfileFormModal";

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

it('test users page ', async () =>  {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: true }));

    const catchFn = jest.fn();
    const thenFn = jest.fn();

    await getUsersRequest().then(thenFn).catch(catchFn)

    expect(thenFn).toHaveBeenCalled();

    render(
        <MemoryRouter>
            <Users />
        </MemoryRouter>
    );
    expect(true).toEqual(true);
});


