import './src/styles/settings/colors.css'
import './src/styles/generics/reset.css'
import './src/styles/elements/base.css'

import cardGame from './src/components/cardGame';



const $root = document.querySelector('#root');
const $htmlCardGame = cardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);

