import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import ProfileFormModal from "../../components/ProfileFormModal/ProfileFormModal";
import {act, fireEvent, getByTestId} from "@testing-library/react";
import axios from "axios";
import {createProfileRequest, editProfileRequest, editUserRequest, getUserById} from "../../api/api";
import userEvent from "@testing-library/user-event";
import * as redux from 'react-redux';
import {shallow} from "enzyme";
import {Form} from "antd";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
let url = ''
let body = {}
let container;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
jest.mock("axios", () => ({
    post: jest.fn((_url, _body) => {
        return new Promise((resolve) => {
            url = _url
            body = _body
            resolve(true)
        })
    }),
    put: jest.fn((_url, _body) => {
        return new Promise((resolve) => {
            url = _url
            body = _body
            resolve(true)
        })
    })
}))


describe('test user modal', () => {
    it('main test ', async () =>  {
        const catchFn = jest.fn();
        const thenFn = jest.fn();
        const mock = jest.fn();
        const {container, getByTestId} = render( <ProfileFormModal setIsModalVisible={mock} /> );

        await editUserRequest().then(() => {thenFn()}).catch(catchFn)
        expect(thenFn).toHaveBeenCalled();
        expect(mock).toHaveBeenCalled();

    });
    it('handleCancel test show profiles ', async () =>  {

        const fakeResponse = [];

        jest.spyOn(window, "fetch").mockImplementation(() => {
            const fetchResponse = {
                json: () => Promise.resolve(fakeResponse)
            };
            return Promise.resolve(fetchResponse);
        });

        await act(async () => {
            render(<ProfileFormModal />, container);
        });

        expect(container.textContent).toBe("");

        window.fetch.mockRestore();

    });

})
