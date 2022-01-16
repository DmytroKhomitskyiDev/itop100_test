import React from "react";
import '@testing-library/jest-dom/extend-expect';
import App from "../../App";
import {MemoryRouter} from "react-router-dom";
import * as ReactDOM from "react-dom";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

jest.mock('react-dom', () => ({ render: jest.fn() }))

it('test index.js ',  () =>  {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    ReactDOM.render(<App />, div)
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div)
});

it("should render the app inside div which has root id", () => {
    expect(global.document.getElementById("root")).toBeDefined();
});

it("should render App component", () => {
    expect(App).toBeDefined();
});