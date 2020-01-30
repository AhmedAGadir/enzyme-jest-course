import React from 'react';
import { mount } from 'enzyme';
import Congrats from './Congrats';
import languageContext from './contexts/languageContext';
import { findByTestAttr } from './test/testUtils';

/** 
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Context values specific to this setup
 * @returns {ShallowWrapper}
 * */
const setup = ({ success, language }) => {
    language = language || 'en';
    success = success || false;
    return mount(
        <languageContext.Provider value={language}>
            <Congrats success={success} />
        </languageContext.Provider>
    )
};

test('renders without error', () => {
    const wrapper = setup({});
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

describe('languagePicker', () => {
    test('correctly renders congrats string in english', () => {
        const wrapper = setup({ success: true });
        expect(wrapper.text()).toBe("Congratulations! You guessed the word!")
    });
    test('correctly renders congrats string in emoji', () => {
        const wrapper = setup({ success: true, language: 'emoji' });
        expect(wrapper.text()).toBe("🎯🎉");
    });
})