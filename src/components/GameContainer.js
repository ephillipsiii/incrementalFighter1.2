import React, { Component } from "react";
import NavTabs from './navtabs'
import Game from './pages/game'
import Contact from './pages/contact'
import {Gear} from './pages/gear'
import Stats from './pages/stats'

class GameContainer extends Component {
  state = {
    currentPage: "Game",
    enemyHealth: 100,
    damagePerSecond: 1
  };
  idleDamage = () => {
    let dpsOn = setTimeout(() => {
    let dps = this.state.damagePerSecond
      this.setState({ enemyHealth: this.state.enemyHealth - dps })
    }, 1000);
    if(this.state.enemyHealth === 0){
      clearTimeout(dpsOn)
    }
  }
  attack = dmg => {
    this.setState({ enemyHealth: this.state.enemyHealth - dmg })
    console.log(`Attacked for ${dmg}`)
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  renderPage = () => {
    switch (this.state.currentPage) {
      case "Game":
        return <Game
          enemyHealth={this.state.enemyHealth}
          attack={this.attack}/>
      case "Gear":
        return <Gear />
      case "Stats":
        return <Stats />
      default:
        return <Contact />
    }
  };
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default GameContainer