import './style.css'
import cardGame from "../../components/cardGame/index";

function boardGame(amountCards){
    const $htmlCardGame = cardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards)

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
export default boardGame;