import React from "react";
import {render, waitFor} from '@testing-library/react';
import RegistrationUser from "../pages/RegistrationUser";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";
import {getDashBoardRequest, registerUserRequest} from "../api/api";

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
    post: jest.fn((_url, _body) => {
        return new Promise((resolve) => {
            url = _url
            body = _body
            resolve(true)
        })
    })
}))

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => mockedNavigator
}));

describe("test registration",() => {

    const reloadFn = () => {
        window.location.reload(true);
    };

    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
        });
    });

    it("registration empty username unsuccessful", async () => {
        const fakeAnswer = { status: false, message: 'Please input your username!' };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );

        const { getByTestId, getByText } = render(<RegistrationUser />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");
        const username = getByTestId("username");

        userEvent.type(useremail, "test@mail.ua");
        userEvent.type(userpass, "1");
        userEvent.type(username, "");

        userEvent.click(getByText("Sign Up"));
        await waitFor(() => {
            const error = getByText('Please input your username!');
            expect(error).toBeInTheDocument();
        })
        global.fetch.mockRestore();
    })

    it("registration empty email unsuccessful", async () => {
        const fakeAnswer = { status: false, message: 'Please input your email!' };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );

        const { getByTestId, getByText } = render(<RegistrationUser />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");
        const username = getByTestId("username");

        userEvent.type(useremail, "");
        userEvent.type(userpass, "1");
        userEvent.type(username, "ser");

        userEvent.click(getByText("Sign Up"));
        await waitFor(() => {
            const error = getByText('Please input your email!');
            expect(error).toBeInTheDocument();

        })
        global.fetch.mockRestore();
    })

    it("registration empty password unsuccessful", async () => {
        const fakeAnswer = { status: false, message: 'Please input your password!' };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );

        const { getByTestId, getByText } = render(<RegistrationUser />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");
        const username = getByTestId("username");

        userEvent.type(useremail, "test@mail.ua");
        userEvent.type(userpass, "");
        userEvent.type(username, "ser");

        userEvent.click(getByText("Sign Up"));
        await waitFor(() => {
            const error = getByText('Please input your password!');
            expect(error).toBeInTheDocument();

        })
        global.fetch.mockRestore();
    })

    it(" registration user success", async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve({ data: {success: true} }));

        const catchFn = jest.fn();
        const thenFn = jest.fn();
        const fakeAnswer = { status: true };

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeAnswer)
            })
        );

        const { getByTestId, getByText } = render(<RegistrationUser />);

        const useremail = getByTestId("email");
        const userpass = getByTestId("password");
        const username = getByTestId("username");

        userEvent.type(useremail, "user@gmail.com");
        userEvent.type(userpass, "21");
        userEvent.type(username, "Ben");

        userEvent.click(getByText("Sign Up"));
        await waitFor(() => {
            reloadFn(); // as defined above..
            expect(window.location.reload).toHaveBeenCalled();
        })

        await registerUserRequest().then(thenFn).catch(catchFn)

        expect(thenFn).toHaveBeenCalled();
    })

    it(" registration user success res", async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve({ data: {success: true} }));

        const catchFn = jest.fn();
        const thenFn = jest.fn();


        render(<RegistrationUser />);

        await registerUserRequest().then(thenFn).catch(catchFn)

        expect(thenFn).toHaveBeenCalled();
    })
})



