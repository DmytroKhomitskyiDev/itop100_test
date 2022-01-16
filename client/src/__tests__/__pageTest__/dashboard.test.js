import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from "../../pages/Dashboard";


it('test Dashboard page ',  () =>  {
    render(
        <Dashboard />
    );
    expect(true).toEqual(true);
});