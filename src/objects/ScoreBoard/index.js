import playerName from "../../components/PlayerName";
import playerScore from "../../components/playerScore";
import vsPlayer from "../../components/vsPlayer";
import './style.css'

function scoreBoard (){
    return /*html*/ `
        <header class="score-board">
        ${playerName('Player 1')} 
        ${playerScore(1)}
        ${vsPlayer()}
        ${playerScore()}   
        ${playerName('Player 2')}
        </header>
    `
}
export default scoreBoard;
