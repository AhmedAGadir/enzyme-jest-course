import React from 'react';

function Input(props) {
    // not destructuring useState from React so that we can mock
    const [currentGuess, setCurrentGuess] = React.useState('');
    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={event => setCurrentGuess(event.target.value)} />
                <button
                    data-test="submit-button"
                    onClick={e => e.preventDefault()}
                    className="btn btn-primary mb-2"
                >Submit</button>
            </form>
        </div>
    );
}

export default Input;