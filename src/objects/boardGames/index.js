import cardGame from "../../components/cardGame/index";

function boardGame(amountCards){
    const $htmlCardGame = cardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards)

    return $htmlBoardGame;
}
export default boardGame;