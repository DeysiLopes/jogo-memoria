import './style.css'
import cardFrontBack from '../../components/CardFontBack';
import cards from "./Data"

function boardGame(amountCards){
   
    const htmlCardsList = cards.map((card) => cardFrontBack(card.icon, card.altIcon))
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
        <section class="board-game">
            ${$htmlCards}
        </section>
    `;
}
export default boardGame;