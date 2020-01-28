import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test='counter-display'>The counter is {this.state.counter}</h1>
        <button
          data-test='increment-button'
          onClick={this.incrementCounter}
        >Increment</button>
      </div>
    );
  }
}

export default App;
