import deathKnight from './enemies/death_knight.png';
import demon from './enemies/demonspawn_black_male.png';


var imageSrc = deathKnight;
const enemy = () => {
    console.log(imageSrc)

    if (imageSrc===demon){
        imageSrc = deathKnight
    } else if(imageSrc===deathKnight){
        imageSrc = demon
    }
    return imageSrc;
}

export {enemy, imageSrc};