import React, { Component } from "react";
import API from "../../utils/API";
const Login = require("../../authentication/social-config");

let id = 'no id'
        if ((Login.facebookConfig.appId === 'YOUR FB APP ID GOES HERE') && (Login.googleConfig.client_id === 'YOUR GOOGLE APP ID GOES HERE')) {
            id = 'no id'
        }
        else if (Login.facebookConfig.appId === 'YOUR FB APP ID GOES HERE') {
            id = Login.googleConfig.client_id
        }
        else if (Login.googleConfig.client_id === 'YOUR GOOGLE APP ID GOES HERE') {
            id = Login.facebookConfig.appId;
        };
        console.log(id)

class Contact extends Component {



    Save() {
        if (id !== 'no id') {
            console.log("id: " + id);
            API.saveGame({
                name: id,
                enemyHealth: window.GameContainer.state.enemyHealth,
                enemyDamage: window.GameContainer.state.enemyDamage,
                playerHealth: window.GameContainer.state.playerHealth,
                enemiesKilled: window.GameContainer.state.enemiesKilled,
                playerDeaths: window.GameContainer.state.playerDeaths,
                bossesBeat: window.GameContainer.state.bossesBeat
            })
                .then(response => {
                    console.log(response);
                })
                .catch(err => console.log(err));
            alert("Game Saved!");
        } 
        else if(id === 'no id') { 
            alert("Please Login to access the save features");
        }
    };

    sessionSave() {
        localStorage.setItem("save", JSON.stringify({
            enemyHealth: window.GameContainer.state.enemyHealth,
            enemyDamage: window.GameContainer.state.enemyDamage,
            playerHealth: window.GameContainer.state.playerHealth,
            enemiesKilled: window.GameContainer.state.enemiesKilled,
            playerDeaths: window.GameContainer.state.playerDeaths,
            bossesBeat: window.GameContainer.state.bossesBeat
        }));
    }

    Load() {
        API.loadGame({name: id})
            .then(res => {
                console.log(res.data)
                let lastSave = res.data;
                window.GameContainer.setState({
                    currentPage: "Game",
                    enemyHealth: lastSave.enemyHealth,
                    enemyDamage: lastSave.enemyDamage,
                    playerHealth: lastSave.playerHealth,
                    enemiesKilled: lastSave.enemiesKilled,
                    playerDeaths: lastSave.playerDeaths,
                    bossesBeat: lastSave.bossesBeat
                })
            })
            .then(window.GameContainer.render())
            .catch(err => console.log(err));

    };

    sessionLoad() {
        let data = localStorage.getItem("save");
        let lastSave = JSON.parse(data);
        window.GameContainer.setState({
            currentPage: "Game",
            enemyHealth: lastSave.enemyHealth,
            enemyDamage: lastSave.enemyDamage,
            playerHealth: lastSave.playerHealth,
            enemiesKilled: lastSave.enemiesKilled,
            playerDeaths: lastSave.playerDeaths
        });
        window.GameContainer.render();
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
