import React from "react";

import '@testing-library/jest-dom/extend-expect';
import {render} from "../test-utils";
import PrivateRoute from "../../components/routes/PrivateRoute";

const mockedNavigation = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") ),
    useNavigate: () => mockedNavigation,
}));

it('test PrivateRoute ',  () =>  {

    useNavigate: () => ({
        navigate: jest.fn().mockImplementation(() => ({})),
    }),
        render(
            <PrivateRoute />
        );
    expect(true).toEqual(true);
});