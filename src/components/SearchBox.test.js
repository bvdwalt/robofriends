import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

describe('Testing SearchBox Component', () => {
    it('Expect to render SearchBox component', () => {
        expect(shallow(<SearchBox />)).toMatchSnapshot();
    })
})