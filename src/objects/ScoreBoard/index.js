import playerName from "../../components/PlayerName";
import playerScore from "../../components/playerScore";
import vsPlayer from "../../components/vsPlayer";
import './style.css'

function scoreBoard (){
    return /*html*/ `
        <header class="score-board">
        ${playerName('Player 1')} 
        ${playerScore(2)}
        ${vsPlayer()}
        ${playerScore(3)}   
        ${playerName('Player 2')}
        </header>
    `
}
export default scoreBoard;
