import React from "react";

import '@testing-library/jest-dom/extend-expect';
import UserCard from "../../components/UserCard/UserCard";
import AdminRoute from "../../components/routes/AdminRoute";
import {render} from "../test-utils";

const mockedNavigation = jest.fn();

jest.mock("react-router-dom", () => ({
        ...(jest.requireActual("react-router-dom") ),
    useNavigate: () => mockedNavigation,
}));

it('test AdminRoute ',  () =>  {

    useNavigate: () => ({
        navigate: jest.fn().mockImplementation(() => ({})),
    }),
    render(
         <AdminRoute  />
    );
    expect(true).toEqual(true);
});