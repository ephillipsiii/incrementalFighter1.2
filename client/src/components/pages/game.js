import React from 'react';
import player from '../../images/gargoyle_male.png'
import {imageSrc} from '../../images/enemyPool.js'
import floor from '../../images/tomb_1_old.png'
import { mainWeapon } from './gear'

const Game = props => (
    
    <div style={{
        backgroundImage: `url(${floor})`
    }}>
        <div
            style={{}}
        >

            <p style={{
                color: 'white',
                textAlign: 'left',
                margin: 0
            }}
                id='killCount'>
                Enemies Killed: {props.enemiesKilled}
            </p>
        </div>
        <div
            style={{
                position: 'fixed',
                left: 0,
                height: '100%',
                width: '50%',
                backgroundImage: `url(${floor})`
            }}
        >
            <div style={{
                backgroundImage: `url(${floor})`
            }}>

                <div style={{
                    backgroundImage: `url(${floor})`
                }}>
                
                <p style={{
                    color: 'white',
                    textAlign: 'left'
                }}>Action Log</p>
                <p style={{
                    color: 'white'
                }}>
                {props.actions}</p>
                    <img src={player} alt='Player' style={{
                        position: 'fixed',
                        left: 0,
                        bottom: 0,
                        width: '100px',
                        height: '100px',
                    }} />
                </div>
            </div>

            <div style={{
                position: 'fixed',
                height: '100%',
                width: '50%',
                top:100,
                right: 0,
                backgroundImage: `url(${floor})`
            }}>
                <div
                    style={{
                    }}>
                    <p style={{
                        textAlign: 'right',
                        color: 'white',
                    }}>{props.enemyHealth}</p>
                    <img src={imageSrc} alt='Enemy' style={{
                        position: 'fixed',
                        right: 0,
                        height: '100px',
                        width: '100px'
                    }}
                        onClick={() => props.attack(mainWeapon.dmg+(props.enemiesKilled*1.5))}


                    />


                </div>
            </div>
        </div>
    </div>
);

export default Game;