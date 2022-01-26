import './style.css'
import cardFrontBack from '../../components/CardFontBack';

function boardGame(amountCards){
    const $htmlCardFrontBack = cardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards)

    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
export default boardGame;