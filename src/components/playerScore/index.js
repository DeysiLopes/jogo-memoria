import './style.css'

function playerScore(points = 0){
    return /*html*/ `
        <ol class="player-score" data-points = "${points}">
            <li class="pointer">Um</li>
            <li class="pointer">Dois</li>
            <li class="pointer">Três</li>
        </ol>
    `;
}
export default playerScore;