import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Profiles from "../../pages/Profiles";
import {MemoryRouter} from "react-router-dom";

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

it('test Profiles page ',  () =>  {
    render(
        <MemoryRouter>
            <Profiles />
        </MemoryRouter>
    );
    expect(true).toEqual(true);
});