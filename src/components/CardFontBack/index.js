import cardGame from '/src/components/cardGame/index'
import './style.css'




function cardFrontBack(icon, altIcon){
    window.CardFrontBack = {} //precisa setar um namespace senão irá sobrescrever sempre o handleClick no escopo global
    window.CardFrontBack.handleClick = (event) => {
        const $origin = event.target;//target é a origem do click
        const $cardFrontBack = $origin.closest('.card-front-back');//pega com o seletor que no caso é a classe mais proxima do evento => onclick 
        // poderia ser usado o parentNode que procura de forma manual o pai que tem a minha animação 
        
        // if($cardFrontBack.classList.contains('-active')){
        //     $cardFrontBack.classList.remove('-active');
        // }else {
        //     $cardFrontBack.classList.add('-active');
        // } isso é um toggle
        
        $cardFrontBack.classList.toggle('-active')
        //adiciona a animação que foi feita em css que está na classe -active
    }
 // handleClick() é uma string da função que será executado no futuro, que está no escopo global por causa do window namespace
    return /*html*/ `
        <article class="card-front-back"  onclick="CardFrontBack.handleClick(event)"> 
            <div class="card -front">
                ${cardGame()}
            </div>
            <div class="card -back">
                ${cardGame(icon, altIcon)}
            </div>
           
            
        </article>
    `

}
export default cardFrontBack;