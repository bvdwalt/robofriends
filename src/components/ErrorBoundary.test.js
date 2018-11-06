import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('Testing ErrorBoundary Component', () => {
    it('Expect to render ErrorBoundary component', () => {
        expect(shallow(<ErrorBoundary />)).toMatchSnapshot()
    })
})