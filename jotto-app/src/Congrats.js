import React from 'react';
import languageContext from './contexts/languageContext';
import stringsModule from './helpers/strings';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if 'success' props is false)
 */
export default (props) => {
    const language = React.useContext(languageContext);
    if (props.success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    {stringsModule.getStringByLanguage(language, 'congrats')}
                </span>
            </div>
        )
    }
    return (
        <div data-test="component-congrats" />
    )
}