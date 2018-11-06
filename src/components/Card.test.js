import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

describe('Testing Card Component', () => {
    it('Expect to render card component', () => {
        // expect(shallow(<Card />).length).toEqual(1)
        expect(shallow(<Card />)).toMatchSnapshot()
    })
})