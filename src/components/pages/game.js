import React from 'react';
import {mainWeapon} from './gear'

const Game = props => (
    <div >
        <div
            style={{
                width:'50%',
                height:'100%',
                position:'fixed',
                right:0
            }}
            onClick={() => props.attack(mainWeapon.dmg)}
        >
            <p style={{}}>{props.enemyHealth}</p>
            <img src='' alt='Enemy' />
        </div>
        <div>
            <p style={{
                textAlign: 'left'
            }}>Action Log</p>
        </div>
        <div>
            <img src='./../images/demonspawn_black_male.png' alt='Player' style={{ position: 'fixed', left: 0, bottom: 0 }} />
        </div>
    </div>
);

export default Game;