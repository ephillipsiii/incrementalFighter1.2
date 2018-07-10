import React from 'react';
import player from '../../images/gargoyle_male.png'


const gear = () => (
    <div>
        Check out your gear, and switch out items
        <br/>
        <img src={player} alt='Player' style={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '200px',
            height: '200px',
        }} />
    </div>

)

const MainWeapon = {
    dmg: 5
}

export const Gear = gear,
    mainWeapon = MainWeapon;
