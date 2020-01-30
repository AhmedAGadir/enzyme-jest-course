import React, { useState, useEffect } from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

// we dont need the mock to do anything, we just want to spy on it to see if its getting called, what its getting called with etc.
const mockGetSecretWord = jest.fn();

/** 
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @returns {ReactWrapper}
 * */
const setup = (props = {}) => {

  // were gonna clear the mock before every test so that it runs clean
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  // currently useEffect is incompatible with the enzyme shallow wrapper, so we have to use 'mount' instead to render our component
  return mount(<App {...props} />);
};


test('App renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();
    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    // were clearing the mock function because we expect it to get called once, on mount
    // we want to test that it doesnt get called again on updating
    mockGetSecretWord.mockClear();
    // the enzyme method .update() doesnt run useEffect atm, its a bug 
    // so instead well use .setProps
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
})
