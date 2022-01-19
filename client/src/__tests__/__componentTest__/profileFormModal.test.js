import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import ProfileFormModal from "../../components/ProfileFormModal/ProfileFormModal";
import {act, fireEvent, getByTestId} from "@testing-library/react";
import axios from "axios";
import {createProfileRequest, editProfileRequest, getUserById} from "../../api/api";
import userEvent from "@testing-library/user-event";
import * as redux from 'react-redux';
import renderer from 'react-test-renderer'
import {shallow, mount} from "enzyme";
import {Button, Form} from "antd";

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
let container;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {

    container.remove();
    container = null;
});
describe('test user profile form modal', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;
    let mock;

    beforeEach(() => {
        axios.post.mockImplementationOnce(() => Promise.resolve({ data: true }));
        axios.put.mockImplementationOnce(() => Promise.resolve({ data: true }));

        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        spyOnUseSelector.mockReturnValue([{
            profile: {
                activeProfile: 2
            }
        }]);

        // Mock useDispatch hook
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        // Mock dispatch function returned from useDispatch
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);

        mock = jest.fn()
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('main test ', async () =>  {
        const catchFn = jest.fn();
        const thenFn = jest.fn();
        const then2Fn = jest.fn();
        const {container, getByTestId} = render( <ProfileFormModal isModalVisibleDefault={true}/> );

        await editProfileRequest().then(() => {thenFn()}).catch(catchFn)
        expect(thenFn).toHaveBeenCalled();

        await createProfileRequest().then(() => {then2Fn()}).catch(catchFn)
        expect(then2Fn).toHaveBeenCalled();

        userEvent.click(getByTestId("submitBtn"));
        userEvent.click(getByTestId("handleCancelBtn"));

        expect(mock).toHaveBeenCalledTimes(0);
        // expect(container).toMatchSnapshot();
    });

    it('on finish test ', async () =>  {
        const mockFunc = jest.fn();
        const wrapper = shallow(<ProfileFormModal />);
        const subButton = wrapper.find('.btnOk');
        subButton.simulate('click')
        setTimeout(() => {
            expect(mockFunc).toHaveBeenCalled();
        }, 0)
    });

    it('handle cancel test ', async () =>  {
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        const wrapper = mount(<ProfileFormModal />);
        const cancelBtn = wrapper.find('.closeBtn');
        cancelBtn.simulate('click')
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
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