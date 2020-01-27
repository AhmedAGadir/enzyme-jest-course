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

// // can use 'test' or 'it'
// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
//   // ** test will now fail **
//   // throw new Error
// })

// can use 'test' or 'it'
test('renders without crashing', () => {
  // renders a shallow version of App (renders placeholders in place of child components)
  const wrapper = shallow(<App />);
  // debug returns the DOM as a string
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
  // expect(wrapper).toBeFalsy();
})
