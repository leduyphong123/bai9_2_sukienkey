function upMove() {
    let move = document.getElementById("nobita");
    move.style.top = parseInt(move.style.top) - 5 + "px";
}

function downMove() {
    let move = document.getElementById("nobita");
    move.style.top = parseInt(move.style.top) + 5 + "px";

}

function leftMove() {
    let move = document.getElementById("nobita");
    move.style.left = parseInt(move.style.left) - 5 + "px";
}

function rightMove() {
    let move = document.getElementById("nobita");
    move.style.left = parseInt(move.style.left) + 5 + "px";
}

function onKeyMove(evt) {
    switch (evt.keyCode) {
        case 37:
            leftMove();
            break;
        case 39:
            rightMove();
            break;
        case 38:
            upMove();
            break;
        case 40:
            downMove();
            break;
        default:
            break;
    }
}

function docReady(){
    window.addEventListener("keydown",onKeyMove)
}

