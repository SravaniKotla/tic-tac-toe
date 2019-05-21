import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe("App Component", () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });
});