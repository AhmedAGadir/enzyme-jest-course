import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import hookActions from './actions/hookActions';

import Input from './Input';

import languageContext from './contexts/languageContext';
import LanguagePicker from './LanguagePicker';

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
    case 'setSecretWord':
      return { ...state, secretWord: payload };
    case 'setLanguage':
      return { ...state, language: payload }
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

  const setLanguage = language => {
    dispatch({ type: 'setSecretWord', payload: language });
  }

  // we only want to get the secret word when the component mounts, not whenever the component updates
  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    )
  }

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      {/* anywhere within this element, the language context value can be reached
      and anytime the value changes, the children will be re-rendered */}
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
      </languageContext.Provider>
      <Input secretWord={state.secretWord} />
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 2 }
      ]} />
    </div>
  );
}

export default App;
