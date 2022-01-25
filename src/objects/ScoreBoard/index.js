import playerName from "../../components/PlayerName";

function scoreBoard (){
    return /*html*/ `
        <header class="score-board">
        ${playerName('Player 1')}    
        ${playerName('Player 2')}
        </header>
    `
}
export default scoreBoard;
