import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import Users from "../../pages/Users";

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

it('test users page ',  () =>  {
    render(
        <MemoryRouter>
            <Users />
        </MemoryRouter>
    );
    expect(true).toEqual(true);
});