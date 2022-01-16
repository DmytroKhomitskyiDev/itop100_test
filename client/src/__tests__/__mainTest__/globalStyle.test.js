import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GlobalStyles from "../../styles/globalStyles";


it('test global styles ',  () =>  {
    render(<GlobalStyles />);
    expect(true).toEqual(true);
});