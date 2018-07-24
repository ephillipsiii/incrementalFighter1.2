import React, { Component } from "react";
import API from "../../utils/API";


// ACCESS DATA FROM GAME CONTAINER SOMEHOW


class Contact extends Component {


    Save() {
        API.saveGame({
            enemyHealth: window.GameContainer.state.enemyHealth,
            enemyDamage: window.GameContainer.state.enemyDamage,
            playerHealth: window.GameContainer.state.playerHealth,
            enemiesKilled: window.GameContainer.state.enemiesKilled,
            playerDeaths: window.GameContainer.state.playerDeaths,
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err));
        alert("Game Saved!");
    };

    Load() {
        API.loadGame()
            .then(res => {
                // console.log(res.data[res.data.length - 1])
                let lastSave = res.data[res.data.length - 1];
                window.GameContainer.setState({
                    currentPage: "Game",
                    enemyHealth: lastSave.enemyHealth,
                    enemyDamage: lastSave.enemyDamage,
                    playerHealth: lastSave.playerHealth,
                    enemiesKilled: lastSave.enemiesKilled,
                    playerDeaths: lastSave.playerDeaths
                })
            })
            .then(window.GameContainer.render())
            .catch(err => console.log(err));

    };



    render() {
        return (
            <div style={{height:500}}>
                Links to repo, Linkedin pages?
        <div>
                    <button onClick={this.Save}>
                        SAVE
            </button>
                    <button onClick={this.Load}>
                        LOAD
            </button>
                </div>
            </div>
        )
    }
};
export default Contact;