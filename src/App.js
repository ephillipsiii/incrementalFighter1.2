import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Incremental Fighter</h1>
        <GameContainer />
      </div>
    );
  }
}

export default App;
