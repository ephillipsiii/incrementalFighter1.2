import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }
  }
  render() {
    return (
        <div className="App">
          <h1 className="App-title">Incremental Fighter</h1>
          <GameContainer ref={(GameContainer) => { window.GameContainer = GameContainer }} />
        </div>
    );
  }
}

export default App;
