import deathKnight from './enemies/death_knight.png';
import demon from './enemies/demonspawn_black_male.png'

const enemy = () => {
    var chosenEnemy;
    if (chosenEnemy){
        chosenEnemy = deathKnight
    } else {
        chosenEnemy = demon
    }
    return chosenEnemy;
}

export default enemy;