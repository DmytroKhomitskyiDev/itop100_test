import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from "../../pages/Dashboard";
import mockAxios from "jest-mock-axios";
import {baseUrl, getDashBoardRequest} from "../../api/api";
import axios from "axios";

afterEach(() => {
    mockAxios.reset();
});
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

it('test Dashboard page ', async () =>  {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: true }));

    const catchFn = jest.fn();
    const thenFn = jest.fn();


    render(
        <Dashboard />
    );

    await getDashBoardRequest().then(thenFn).catch(catchFn)

    expect(thenFn).toHaveBeenCalled();
    expect(true).toEqual(true);
});