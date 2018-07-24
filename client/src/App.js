import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import ReactAudioPlayer from 'react-audio-player';

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
          <ReactAudioPlayer />
        </div>
    );
  }
}

export default App;
