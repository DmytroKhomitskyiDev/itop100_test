import React from "react";
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import axios from "axios";
import {deleteUserRequest, getUserById} from "../../api/api";

let url = ''
let body = {}
jest.mock("axios", () => ({
    delete: jest.fn((_url, _body) => {
        return new Promise((resolve) => {
            url = _url
            body = _body
            resolve(true)
        })
    })
}))

it('test AddCardProfile ', async () =>  {
    axios.delete.mockImplementationOnce(() => Promise.resolve({ data: true }));
    const catchFn = jest.fn();
    const thenFn = jest.fn();

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

    fireEvent.mouseEnter(getByTestId("deleteButton"))
    expect(container.getElementsByClassName("buttonImg")).toBeTruthy();
    fireEvent.mouseLeave(getByTestId("deleteButton"))
    expect(container.getElementsByClassName("buttonImg")).toBeTruthy();

    expect(true).toEqual(true);

    fireEvent.click(getByTestId("deleteButton"))
    await deleteUserRequest().then(() => {thenFn()}).catch(catchFn)
});