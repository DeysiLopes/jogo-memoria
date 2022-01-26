import "./style.css";

function cardGame(icon = "Battle", alt = "Batalha"){
    return /*html*/`
        <article class="card-game">
            <img src="/images/${icon}.svg" alt="${alt}">
        </article>
    `;
    
}

export default cardGame;