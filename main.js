import './src/styles/settings/colors.css'
import './src/styles/generics/reset.css'
import './src/styles/elements/base.css' 
import scoreBoard from './src/objects/ScoreBoard';
import boardGame from './src/objects/boardGames';



const $root = document.querySelector('#root');

//console.log($htmlBoardGame);

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${scoreBoard()}    
        ${boardGame(6)}
    `
);

