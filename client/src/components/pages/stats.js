import React from 'react'

const Stats = props => (
    <div>
        Check out and adjust Stats
        <br />
        <p>
            Your {props.enemiesKilled} kills are giving the enemy {props.enemiesKilled * 10} bonus health, and giving you {props.enemiesKilled * 5} extra health.
            Your deaths grant the enemy Fury, giving them {Math.ceil(props.playerDeaths*0.4)} bonus damage.
        </p>
    </div>
)

export default Stats;