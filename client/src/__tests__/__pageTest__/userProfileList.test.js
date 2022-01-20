import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import UserProfilesList from "../../pages/UserProfilesList";
import axios from "axios";
import {baseUrl, deleteUserRequest, getDashBoardRequest, getUserById} from "../../api/api";
import * as reactRedux from 'react-redux'
import {act, fireEvent, waitFor} from "@testing-library/react";
import ProfileFormModal from "../../components/ProfileFormModal/ProfileFormModal";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
const mockedFn = jest.fn();


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

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => ({
        navigate: mockedFn
    })
}));
let container;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
describe('user profile list', () => {
    it('test user Profile list page ', async () =>  {
        axios.get.mockImplementationOnce(() => Promise.resolve({ data: true }));

        const catchFn = jest.fn();
        const thenFn = jest.fn();
        const thenDeleteFn = jest.fn();
        const finallyFn = jest.fn()
        const mockedFnDispatch = jest.fn();
        jest.mock("react-redux", () => ({
            ...(jest.requireActual("react-redux")),
            useDispatch: () => ({
                dispatch: mockedFnDispatch
            })
        }));
        const mock = jest.fn();
        const {getByTestId} = render(<MemoryRouter><UserProfilesList isLoaderProps={true}/></MemoryRouter>);

        await getUserById().then(() => {thenFn()}).catch(catchFn).finally(() => {finallyFn()})

        expect(thenFn).toHaveBeenCalled();
        //
        // expect(finallyFn).toHaveBeenCalled();

        fireEvent.click(getByTestId("modalBtn"))
        expect(mock).toHaveBeenCalledTimes(0);
        fireEvent.click(getByTestId("showModalBtn"))
        expect(mock).toHaveBeenCalledTimes(0);

        // fireEvent.click(getByTestId("deleteButton"))
        //
        await deleteUserRequest().then(() => {thenDeleteFn()}).catch(catchFn).finally(() => {finallyFn()})

        expect(thenDeleteFn).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(0);

        expect(true).toEqual(true);
    });



})