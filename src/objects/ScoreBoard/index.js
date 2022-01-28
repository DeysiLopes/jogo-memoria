import playerName from "../../components/PlayerName";
import vsPlayer from "../../components/vsPlayer";
import './style.css'

function scoreBoard (){
    return /*html*/ `
        <header class="score-board">
        ${playerName('Player 1')} 
        ${vsPlayer()}   
        ${playerName('Player 2')}
        </header>
    `
}
export default scoreBoard;
