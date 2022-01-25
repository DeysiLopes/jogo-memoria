import './src/styles/settings/colors.css'
import './src/styles/generics/reset.css'
import './src/styles/elements/base.css'
import boardGames from './src/objects/boardGames/index';
import playerName from './src/components/PlayerName';



const $root = document.querySelector('#root');

//console.log($htmlBoardGame);

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${playerName('Player 1')}    
        ${playerName('Player 2')}
        ${boardGames(6)}
    `
);

