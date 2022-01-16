import React from "react";
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddCardProfile from "../../components/AddCardProfile/AddCardProfile";


it('test AddCardProfile ',  () =>  {
    const { getByTestId } = render(<AddCardProfile setIsModalVisible={(value) => {}}/>);

    fireEvent.click(getByTestId("modalBtn"))
});