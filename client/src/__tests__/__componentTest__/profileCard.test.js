import React from "react";
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileCard from "../../components/ProfileCard/ProfileCard";


it('test AddCardProfile ',  () =>  {
    const editMock = jest.fn();
    const deleteMock = jest.fn();
    const {getByTestId, container} = render(
        <ProfileCard
            profile={{name: "",gender: "",birthdate: "",city: ""}}
            editProfile={editMock}
            deleteProfile={deleteMock}
        />
    );

    fireEvent.click(getByTestId("editButton"))
    expect(editMock).toBeCalled();
    fireEvent.mouseEnter(getByTestId("editButton"))
    expect(container.getElementsByClassName("buttonImg")).toBeTruthy();
    fireEvent.mouseLeave(getByTestId("editButton"))
    expect(container.getElementsByClassName("buttonImg")).toBeTruthy();

    fireEvent.click(getByTestId("deleteButton"))
    expect(deleteMock).toBeCalled();
    fireEvent.mouseEnter(getByTestId("deleteButton"))
    expect(container.getElementsByClassName("buttonImg")).toBeTruthy();
    fireEvent.mouseLeave(getByTestId("deleteButton"))
    expect(container.getElementsByClassName("buttonImg")).toBeTruthy();

    expect(true).toEqual(true);
});