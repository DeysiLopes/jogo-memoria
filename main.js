import './src/styles/settings/colors.css'
import './src/styles/generics/reset.css'
import './src/styles/elements/base.css'
import boardGames from './src/objects/boardGames/index';
import scoreBoard from './src/objects/ScoreBoard';



const $root = document.querySelector('#root');

//console.log($htmlBoardGame);

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${scoreBoard()}    
        ${boardGames(6)}
    `
);

