import StringsModule from './strings';

const { getStringByLanguage } = StringsModule;

const strings = {
    en: { submit: 'submit' },
    emoji: { submit: '🚀' },
    mermish: {}
}

describe('language string testing', () => {
    const mockWarning = jest.fn();
    const warningPointer = console.warn;

    beforeEach(() => {
        console.warn = mockWarning;
    });

    afterEach(() => {
        console.warn = warningPointer;
    });

    test('returns correct submit string for english', () => {
        const string = getStringByLanguage('en', 'submit', strings);
        expect(string).toBe('submit');
        expect(mockWarning).not.toHaveBeenCalled();
    });

    test('returns correct submit string for emoji', () => {
        const string = getStringByLanguage('emoji', 'submit', strings);
        expect(string).toBe('🚀');
        expect(mockWarning).not.toHaveBeenCalled();
    });

    test('returns english submit string when language does not exist', () => {
        const string = getStringByLanguage('notALanguage', 'submit', strings);
        expect(string).toBe('submit');
        expect(mockWarning).toHaveBeenCalledWith('could not get string [submit] for [notALanguage]');
    });

    test('returns english submit string when submit key does not exist for language', () => {
        const string = getStringByLanguage('mermish', 'submit', strings);
        expect(string).toBe('submit');
        expect(mockWarning).toHaveBeenCalledWith('could not get string [submit] for [mermish]');
    });
})