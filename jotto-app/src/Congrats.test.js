import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

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
test('renders no text when "success" prop is false', () => {
    const wrapper = setup({ success: false });
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(congratsComponent.text()).toBe('');
});
test('renders none empty congrats message when "success" prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});