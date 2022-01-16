import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from "../../App";
import {MemoryRouter} from "react-router-dom";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => ({
        navigate: jest.fn()
    })
}));

it('test App ',  () =>  {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(true).toEqual(true);
});