function playerScore(points = 0){
    return /*html*/ `
        <ol class="player-score" data-points = "${points}">
            <li>Um</li>
            <li>Dois</li>
            <li>Três</li>
        </ol>
    `;
}
export default playerScore;