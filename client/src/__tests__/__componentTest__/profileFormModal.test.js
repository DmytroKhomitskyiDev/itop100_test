import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileFormModal from "../../components/ProfileFormModal/ProfileFormModal";
import {fireEvent} from "@testing-library/react";


it('test ProfileFormModal ',  () =>  {
    const childFunction = jest.fn();
    const {getByTestId, container} = render( <ProfileFormModal /> );

    // fireEvent.click(getByTestId('closeButton'))
    expect(container).toMatchSnapshot();
});