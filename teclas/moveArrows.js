function drawKeyword(evento)
let color = "green";
let move = 12;
switch (evento.keyCode) {
    case keys.UP:
        drawLine(color, x, y, x, y - move, paper);
        y = y - move;
        break;
    case keys.DOWN:
        drawLine(color, x, y, x, y + move, paper);
        y = y + move;
        break;
    case keys.LEFT:
        drawLine(color, x, y, x - move, y, paper);
        x = x - move;
        break;
    case keys.RIGHT:
        drawLine(color, x, y, x + move, y, paper);
        x = x + move;
        break;
    default:
        console.log("otra tecla");
        break;
}

// function dibujarTeclado(evento)
// var color = "green";
// var move = 12;
// switch (evento.keyCode) {
//     case keys.UP:
//         drawLine(color, x, y, x, y - move, paper);
//         y = y - move;
//         break;
//     case keys.DOWN:
//         drawLine(color, x, y, x, y + move, paper);
//         y = y + move;
//         break;
//     case keys.LEFT:
//         drawLine(color, x, y, x - move, y, paper);
//         x = x - move;
//         break;
//     case keys.RIGHT:
//         drawLine(color, x, y, x + move, y, paper);
//         x = x + move;
//         break;
//     default:
//         console.log("otra tecla");
//         break;
// }