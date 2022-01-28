import './style.css'


function vsPlayer (content = 'vs'){
    return /*html*/`
        <span class="vs-player">
            ${content}
        </span>
    ` 
}
export default vsPlayer;