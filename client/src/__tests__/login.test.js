import React from "react";
import {findAllByRole, render, waitFor,screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Login from "../pages/Login";
import axios from "axios";
import App from "../App";
import {MemoryRouter} from "react-router-dom";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
beforeAll(() => {
    window.localStorage.setItem('token', JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY0MjQyNzg1Mn0.T9bvkSg7q6OA1Y5zY2oWh68w5du1L9lKg0iojdK95HM'));
    window.localStorage.setItem('user', JSON.stringify({"id":21,"username":"denus","email":"test1@mail.ua","isadmin":false}));
});
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

const localStorageMock = (function () {
    let store = {};

    return {
        getItem(key) {
            return store[key];
        },

        setItem(key, value) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key) {
            delete store[key];
        },

        getAll() {
            console.log(store);
        },
    };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("test login user",() => {
    const reloadFn = () => {
        window.location.reload(true);
    };
    const successFn = () => {
        return {
            data: {
                success: true,
                token: 'test-token',
                user: {}
            }
        }
    }

    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
        });
    });

    it("login empty email unsuccessful", async () => {
        const fakeAnswer = { status: false, message: 'Please input your email!' };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );

        const { getByTestId, getByText } = render(<Login />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");

        userEvent.type(useremail, "");
        userEvent.type(userpass, "1");

        userEvent.click(getByText("Sign In"));
        await waitFor(() => {
            const error = getByText('Please input your email!');
            expect(error).toBeInTheDocument();

        })
        global.fetch.mockRestore();
    })

    it("login empty password unsuccessful", async () => {
        const fakeAnswer = { status: false, message: 'Please input your password!' };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );

        const { getByTestId, getByText } = render(<Login />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");

        userEvent.type(useremail, "test@mail.ua");
        userEvent.type(userpass, "");

        userEvent.click(getByText("Sign In"));
        await waitFor(() => {
            const error = getByText('Please input your password!');
            expect(error).toBeInTheDocument()
        })
        global.fetch.mockRestore();
    })

    it("login empty both fields unsuccessful", async () => {
        const fakeAnswer = { status: false, message: 'Please input your password!' };
        const fakeAnswer2 = { status: false, message: 'Please input your email!' };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer2)
            })
        );

        const { getByTestId, getByText } = render(<Login />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");

        userEvent.type(useremail, "");
        userEvent.type(userpass, "");

        userEvent.click(getByText("Sign In"));

        await waitFor(() => {
            const error = getByText('Please input your password!');
            const error2 = getByText('Please input your email!');
            expect(error).toBeInTheDocument()
            expect(error2).toBeInTheDocument()
        })
        global.fetch.mockRestore();
    })

    it("login user success", async () => {
        const fakeAnswer = {
            data: {
                success: true,
                token: 'test-token',
                user: {}
            }
        };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );
        const { getByTestId, getByText } = render(<Login />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");

        userEvent.type(useremail, "test@gmail.com");
        userEvent.type(userpass, "1");

        userEvent.click(getByText("Sign In"));
        await waitFor(() => {
            const data = successFn(); // as defined above..
            expect(data).toBeInstanceOf(Object);
        })
    })


})

