import './style.css'

function arrowDown(currentPlayer = 1){
    return /*html*/ `
        <img 
        data-currentPlayer = "${currentPlayer}"
        class="arrow-down" 
        src="/images/ArrowDown.svg" 
        alt="ArrowDown">
    `
}
export default arrowDown;