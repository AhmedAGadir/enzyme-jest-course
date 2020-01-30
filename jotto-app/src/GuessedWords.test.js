import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import GuessedWords from './GuessedWords';

/** 
 * Factory function to create a ShallowWrapper for the GuessedWord component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
    return shallow(<GuessedWords {...props} />);
};

// describe is a way of grouping tests
describe('if there are no words guessed', () => {
    // this will run beforeEach test
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test('renders without error', () => {
        const guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
        expect(guessedWordsComponent.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(guessInstructions.text().length).not.toBe(0);

    });
});
describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    })
    test('renders without error', () => {
        const guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
        expect(guessedWordsComponent.length).toBe(1);
    });
    test('renders guessed words section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWordNodes.length);
    });
});