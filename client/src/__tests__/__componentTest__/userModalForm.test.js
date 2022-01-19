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

        // userEvent.click(getByTestId("cancelUserModalBtn"));
        expect(mock).toHaveBeenCalled();


        // // userEvent.click(getByTestId("submitBtn"));
        //
        // userEvent.click(getByTestId("cancelUserModalBtn"));
        //
        // // expect(container).toMatchSnapshot();
    });

})
