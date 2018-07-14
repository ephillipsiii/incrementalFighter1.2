import deathKnight from './enemies/death_knight.png';
import demon from './enemies/demonspawn_black_male.png';
import elf from './enemies/deep_elf_high_priest.png';
import formicid from './enemies/formicid.png'


var imageSrc = deathKnight;
// var poolOfEnemies = [{hp: this.props.hp, 
//                         characterPic: this.props.pictureId}]

//     for(let i =0; i < poolOfEnemies.length;) {
//         if(this.props.hp <= 10) {
//             i++;
//         }
//         //display the image of character
//     }

const enemy = () => {
    console.log(imageSrc)

    if (imageSrc===demon){
        imageSrc = deathKnight
    } else if(imageSrc===deathKnight){
        imageSrc = elf
    } else if(imageSrc===elf){
        imageSrc = formicid
    } else {
        imageSrc = demon
    }

    return imageSrc;
}

export {enemy, imageSrc};