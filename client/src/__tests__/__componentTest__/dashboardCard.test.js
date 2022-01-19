import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardCard from "../../components/DashboardCard/DashboardCard";


it('test AddCardProfile ',  () =>  {
    render(<DashboardCard name="test" />);
    expect(true).toEqual(true);
});