import React from 'react';

export default (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}