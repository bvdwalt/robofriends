import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />);
});
describe('MainPage', () => {
    it('Test that the MainPage component renders', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('MainPage renders Loading fine', () => {
        const mockPropsoverride = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: true
        }
        const wrapperoverride = shallow(<MainPage {...mockPropsoverride} />)
        expect(wrapperoverride).toMatchSnapshot();
    })

    it('Filters robots correctly(all)', () => {
        expect(wrapper.instance().filterRobots().length).toEqual(0);
    })

    it('Filters robots correctly', () => {
        const mockPropsoverride = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'Johny',
                email: 'testy@testy.com'
            }],
            searchField: 'john',
            isPending: false
        }
        const wrapper2 = shallow(<MainPage {...mockPropsoverride} />)
        expect(wrapper2.instance().filterRobots().length).toEqual(1);
    })
})