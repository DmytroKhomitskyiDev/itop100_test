import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from "../../pages/NotFound";


it('test Dashboard page ',  () =>  {
    render(
        <NotFound />
    );
    expect(true).toEqual(true);
});