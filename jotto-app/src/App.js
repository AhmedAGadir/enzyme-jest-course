import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import hookActions from './actions/hookActions';

/**
 * reducer to update state
 * @param {object} state - existing state
 * @param {object} action - contains 'type' and 'payload' properties for the state update
 *                          for example: {type: 'setSecretWord', payload: 'party'}
 * @return {object} - new state
 */
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'setSecretWord': {
      return { ...state, secretWord: payload };
    }
    default: {
      throw new Error(`Invalid action type: ${type}`);
    }
  }
}

function App() {
  // were not using useState here before were going to have more than one property in the App's state, so for the sake of testing this is easier somehow (?)
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null }
  )

  const setSecretWord = secretWord => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  }

  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 2 }
      ]} />
    </div>
  );
}

export default App;
