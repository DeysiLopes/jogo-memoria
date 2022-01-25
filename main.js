import cardGame from './src/components/cardGame';

const $root = document.querySelector('#root');
const $htmlCardGame = cardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);

