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
        alert(window.GameContainer.state.enemyHealth);
    };

    Load() {
        API.loadGame()
        .then(res =>
        window.GameContainer.setState(res.data)
        )
    };



    render() {
        return (
            <div>
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