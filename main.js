import './src/styles/settings/colors.css'
import './src/styles/generics/reset.css'
import './src/styles/elements/base.css'
import boardGames from './src/objects/boardGames/index';



const $root = document.querySelector('#root');
const $htmlBoardGame = boardGames(3);

//console.log($htmlBoardGame);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

