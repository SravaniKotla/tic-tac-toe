import React from 'react';
import Square from './Square';
import { shallow } from 'enzyme';

describe("Square Component", () => {
    it('renders without crashing', () => {
        shallow(<Square />);
    });
});