import cardGame from '/src/components/cardGame/index'

function cardFrontBack(){
    return /*html*/ `
        <article class="card-front-back">
            ${cardGame("")}
            ${cardGame("charmander", "Charmander")}
            
        </article>
    `

}
export default cardFrontBack;