import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import UserProfilesList from "../../pages/UserProfilesList";
import {getUserById} from "../../api/api";
import axios from "axios";
import {waitFor} from "@testing-library/react";

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

jest.mock("react-redux", () => ({
    ...(jest.requireActual("react-redux")),
    useDispatch: () => ({
        dispatch: mockedFn
    })
}));



it('test user Profile list page ', async () =>  {
    const {getByTestId} = render(
        <MemoryRouter>
            <UserProfilesList />
        </MemoryRouter>
    );
    const user = {
        success: true,
        data: {user: [], profilesUser: []}
    };
    const payload = { data: user };
    jest.mock("axios");
    // Now mock axios get method
    axios.get = jest.fn().mockResolvedValue(payload);

    await waitFor(() => {
        expect(getUserById(9)).resolves.toBeInstanceOf(Object)
    });


    expect(getByTestId('colProfile')).toBeInTheDocument()

    expect(true).toEqual(true);
});