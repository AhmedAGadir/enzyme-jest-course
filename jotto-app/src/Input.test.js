import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

/** 
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @returns {ShallowWrapper}
 * */
const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
};


test('App renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-input');
    expect(appComponent.length).toBe(1);
});

describe('state controlled input field', () => {
    test('state updates with value of input box upon change', () => {
        // jest.fn here creates a function that we can watch - how many times its been called, what its been called with etc
        // this specific one has no implementation, were just testing that its getting called with the right params
        const mockSetCurrentGuess = jest.fn();
        // here jest.fn does have an implementation, were overriding React.useState to be a new function that returns an empty string
        // for the initial state and our other mock function for the method that updates the state
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
});
