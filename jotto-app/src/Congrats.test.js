import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/** 
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

test('renders without error', () => {
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(congratsComponent.length).toBe(1);
});
test('renders no text when "success" prop is false', () => { });
test('renders none empty congrats message when "success" prop is true', () => { });