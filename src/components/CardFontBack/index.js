import cardGame from '/src/components/cardGame/index'

function cardFrontBack(){
    return /*html*/ `
        <article class="card-front-back">
            ${cardGame()}
            ${cardGame()}
        </article>
    `

}
export default cardFrontBack;