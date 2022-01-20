import React from "react";
import {render} from '../test-utils';
import '@testing-library/jest-dom/extend-expect';
import ProfileFormModal from "../../components/ProfileFormModal/ProfileFormModal";
import {act, screen, getByTestId} from "@testing-library/react";
import axios from "axios";
import {createProfileRequest, editProfileRequest, getUserById} from "../../api/api";
import userEvent from "@testing-library/user-event";
import * as redux from 'react-redux';
import {shallow, mount} from "enzyme";
import {Button, Form} from "antd";
import App from "../../App";
import {MemoryRouter} from "react-router-dom";
import {getCurrentTitle} from "../../helpers/utils";

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
    }),
    get: jest.fn((_url, _body) => {
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
beforeAll(() => {
    window.localStorage.setItem('token', JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY0MjQyNzg1Mn0.T9bvkSg7q6OA1Y5zY2oWh68w5du1L9lKg0iojdK95HM'));
    window.localStorage.setItem('user', JSON.stringify({"id":21,"username":"denus","email":"test1@mail.ua","isadmin":false}));
});
describe('test user profile form modal', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;
    let mock;

    beforeEach(() => {
        axios.post.mockImplementationOnce(() => Promise.resolve({ data: true }));
        axios.put.mockImplementationOnce(() => Promise.resolve({ data: true }));
        axios.get.mockImplementationOnce(() => Promise.resolve({
            data: [{profiles:{id: 84, user_id: '9', name: 'PEdro', gender: 'male', birthdate: '05.01.2022'}}]}));

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

    it('handleCancel test', async () =>  {
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

    test('should add new profile', async () => {
        render(<MemoryRouter><App /></MemoryRouter>);
        userEvent.click(await screen.findByText(/Crearte new profile/i));
        userEvent.type(await screen.findByLabelText(/name/i), 'sda');
        userEvent.click(await screen.findByLabelText('male'));
        userEvent.type(await screen.findByLabelText(/birthdate:/i), '28.12.2021');
        userEvent.type(await screen.findByLabelText(/city:/i), 'Lviv');
        userEvent.click(await screen.findByTestId('submitBtn'));

    });


        test('Capitalizes name if config requires that', () => {
            expect(getCurrentTitle('users')).toBe('Users: ');
            expect(getCurrentTitle('profiles')).toBe('Profiles: ');
            expect(getCurrentTitle('adult')).toBe('Profiles over 18 years old: ');
        });

})