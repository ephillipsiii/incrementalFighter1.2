import React, { Component } from "react";
import NavTabs from './navtabs'
import Game from './pages/game'
import { enemy } from '../images/enemyPool'
import Contact from './pages/contact'
import { Gear } from './pages/gear'
import Stats from './pages/stats'

class GameContainer extends Component {
  state = {
    currentPage: "Game",
    enemyHealth: 100,
    enemyDamage: 1,
    playerHealth: 50,
    enemiesKilled: 0,
    playerDeaths:0,
    actions: []
  };
  idleDamage = () => {
    let dpsOn = setTimeout(() => {
      let dps = this.state.damagePerSecond
      this.setState({ enemyHealth: this.state.enemyHealth - dps })
    }, 1000);
    if (this.state.enemyHealth === 0) {
      clearTimeout(dpsOn)
    }
  }
  remove = (items, index) => {
    return [...items.slice(0, index),
    ...items.slice(index + 1, items.length)];
  };
  attack = dmg => {
    let playerFullDmg =dmg + Math.ceil((this.state.enemiesKilled*1.5)+(this.state.playerDeaths*0.5))
    let enemyFullDmg = Math.ceil(this.state.enemyDamage+(this.state.enemiesKilled*0.4)+(this.state.playerDeaths*0.4))
    if(this.state.enemiesKilled>=10&&this.state.enemiesKilled % 5 === 0){
      enemyFullDmg=Math.ceil(enemyFullDmg*2)
    }
    this.setState({ enemyHealth: this.state.enemyHealth - playerFullDmg, playerHealth: this.state.playerHealth - enemyFullDmg, actions: [...this.state.actions, `|| Attacked enemy for ${playerFullDmg}, Enemy hit you for ${enemyFullDmg}`] })
    if (this.state.enemyHealth <= playerFullDmg) {
      this.setState({ enemyHealth: 100 + (this.state.enemiesKilled * 10),playerHealth: this.state.playerHealth+((this.state.enemiesKilled+1)*5), enemiesKilled: this.state.enemiesKilled + 1, actions: [...this.state.actions, `|| Killed the Enemy!`] })
      console.log(this.state.playerHealth, this.state.enemyHealth)
      enemy()
    }
    if (this.state.playerHealth <= enemyFullDmg) {
      console.log(this.state.playerHealth, this.state.enemyDamage)
      this.setState({enemyHealth: 100+(this.state.enemiesKilled * 10),playerHealth:50+(this.state.enemiesKilled*5), playerDeaths: this.state.playerDeaths+1, actions:[...this.state.actions, '||The Enemy Killed you!']})
    }
    if (this.state.actions.length > 4) {
      this.setState({ actions: this.remove(this.state.actions, 0) })
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
          playerHealth={this.state.playerHealth}
          playerDeaths = {this.state.playerDeaths}
          enemiesKilled={this.state.enemiesKilled}
          enemyHealth={this.state.enemyHealth}
          attack={this.attack} />
      case "Gear":
        return <Gear
          enemiesKilled={this.state.enemiesKilled}
          playerDeaths={this.state.playerDeaths} />
      case "Stats":
        return <Stats
          enemiesKilled={this.state.enemiesKilled}
          playerDeaths={this.state.playerDeaths} />
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