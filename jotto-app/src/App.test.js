import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

/** 
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
  return shallow(<App {...props} />);
};


test('App renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
