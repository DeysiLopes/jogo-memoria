import './style.css'
import cardFrontBack from '../../components/CardFontBack';
import cards from "./Data"

function boardGame(amountCards){
    const flipAndHideCards= ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
    }
    const swapPlayer = ()=> {
        const $ArrowDown = document.querySelector('.arrow-down');
        const currentPlayer = $ArrowDown.getAttribute('data-currentPlayer');
        $ArrowDown.setAttribute('data-currentPlayer', currentPlayer == 2 ? 1 : 2)
    }

    window.BoardGame = {};
    window.BoardGame.handleClick = () => {
        const $BoardGame = document.querySelector('.board-game');
        
        const $cardsActive = $BoardGame.querySelectorAll('.card-front-back.-active')
        //console.log($cardsActive.length)
       if ($cardsActive.length === 2){
           setTimeout(() => {
                
               flipAndHideCards($cardsActive);
               swapPlayer();
               
           }, 1500);
       }
    }
   
    const htmlCardsList = cards.map((card) => cardFrontBack(card.icon, card.altIcon))
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
        <section class="board-game" onclick="BoardGame.handleClick()">
            ${$htmlCards}
        </section>
    `;
}
export default boardGame;