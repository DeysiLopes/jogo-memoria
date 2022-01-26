import cardGame from '/src/components/cardGame/index'
import './style.css'

function cardFrontBack(){
    return /*html*/ `
        <article class="card-front-back">
            <div class="card -front">
                ${cardGame()}
            </div>
            <div class="card -back">
                ${cardGame("charmander", "Charmander")}
            </div>
           
            
        </article>
    `

}
export default cardFrontBack;