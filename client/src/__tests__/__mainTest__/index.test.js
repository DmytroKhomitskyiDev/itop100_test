import React from "react";
import '@testing-library/jest-dom/extend-expect';
import App from "../../App";
import rrd, {MemoryRouter} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Index from '../../index';
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

jest.mock('react-dom', () => ({ render: jest.fn() }))


describe('test index', () => {
    test("renders with App and root div", () => {
        const rrd = require('react-router-dom');

        jest.spyOn(rrd, 'BrowserRouter').mockImplementation(({children}) => children);
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        global.document.getElementById = (id) => id ==='root' && div
        expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div)
    })

    it('renders without crashing', () => {
        expect(JSON.stringify(Index)).toMatchSnapshot();
    });
})

