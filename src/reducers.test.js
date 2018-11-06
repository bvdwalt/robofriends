import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

import * as reducers from './reducers';

describe('search Robots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({
            searchField: ''
         })
    })

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
         })
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        error: '',
        isPending: false
    }

    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            error: "",
            isPending: true
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@test.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@test.com'
            }],
            error: "",
            isPending: false
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'no!!!!!!!!!!!!'
        })).toEqual({
            robots: [],
            error: 'no!!!!!!!!!!!!',
            isPending: false
        })
    })
})