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
    damagePerSecond: 1,
    enemiesKilled:0,
    actions:[]
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
    this.setState({ enemyHealth: this.state.enemyHealth - dmg, actions: [...this.state.actions, `Attacked for ${dmg}\n`] })
    if(this.state.enemyHealth === 0){
      this.setState({enemyHealth: 100, enemiesKilled: this.state.enemiesKilled + 1, actions: [...this.state.actions, `Killed the Enemy!`] })
    }
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  renderPage = () => {
    switch (this.state.currentPage) {
      case "Game":
        return <Game
          actions={this.state.actions}
          enemiesKilled={this.state.enemiesKilled}
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