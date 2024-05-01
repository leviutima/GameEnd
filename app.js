var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;
function inicia() {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 5;
    obj = document.getElementById("player");
    player = obj.querySelector('.playerConfig')
    document.addEventListener('keydown', teclaDw);
    document.addEventListener('keyup', teclaUp);
    tmp = setInterval(enterFrame, 20);
}

function teclaDw(event) {
    var tecla = event.keyCode;
    if (tecla == 65) {
        dx = -1;
    } else if (tecla == 87) {
        dy = -1;
    } else if (tecla == 68) {
        dx = 1;
    } else if (tecla == 83) {
        dy = 1;
    }
}

function teclaUp(event) {
    var tecla = event.keyCode;
    if (tecla == 65) {
        dx = 0;
    } else if (tecla == 87) {
        dy = 0;
    } else if (tecla == 68) {
        dx = 0;
    } else if (tecla == 83) {
        dy = 0;
    }
}

function enterFrame() {
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + 'px';
    obj.style.top = py + 'px';
    player.style.left = px + 'px';
    player.style.top = py + 'px'; 
}

window.addEventListener('load', inicia);