// not using react-testing-library
// import { render } from '@testing-library/react';
import React from 'react';
// npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16
// we wont be using ReactDOM - well be using enzyme
// enzyme creates a virtual DOM that tests react without a browser 
// enzyme uses ReactDOM under the hood 
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// TDD -> red/green testing 
// tests should fail first, then pass

// // can use 'test' or 'it'
// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
//   // ** test will now fail **
//   // throw new Error
// })


/** 
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state)
  }
  return wrapper;
}

/**
 * Return a ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} 
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

test('App is truthy', () => {
  // renders a shallow version of App (renders placeholders in place of child components)
  const wrapper = setup();
  // debug returns the DOM as a string
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
  // expect(wrapper).toBeFalsy();
})
test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  // this is called an assertion
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});
test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});
test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});
