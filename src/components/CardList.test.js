import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

describe('Testing Card List Component', () => {
    it('Expect to render Card List component', () => {
        const mockRobots = [
            {
                id: 1,
                name: 'John Snow',
                username: 'jsnow',
                email: 'john@test.com'
            },
            {
                id: 2,
                name: 'John Doe',
                username: 'jdoe',
                email: 'johnDoe@test.com'
            }
        ];
        expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
    })
})