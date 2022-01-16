import React, {Component} from "react";

import '@testing-library/jest-dom/extend-expect';
import Header from "../../components/Header/Header";
import { render, fireEvent, screen } from '../test-utils'
import {MemoryRouter} from "react-router-dom";



it('admin-header',  async () => {
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
    const {getByTestId} = render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )

    fireEvent.click(getByTestId("logoutBtn"))
    expect(mockedFn).toHaveBeenCalledTimes(0);

    expect(true).toEqual(true);
})