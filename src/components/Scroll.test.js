import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

describe('Testing Scroll Component', () => {
    it('Expect to render Scroll component', () => {
        expect(shallow(<Scroll />)).toMatchSnapshot()
    })
})