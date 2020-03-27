function dibujarTeclado(evento)

var colorcito = "green";
var movimiento = 12;
switch(evento.keyCode)
{
    case teclas.UP:
       dibujarLinea(colorcito, x, y,x, y - movimiento, papel);
        y = y - movimiento;
        break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y,x, y + movimiento, papel);
        y = y + movimiento;
        break;
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y,x  - movimiento, y, papel);
       x = x - movimiento;
        break;
    case teclas.RIGHT:
        dibujarLinea(colorcito, x, y,x + movimiento, y, papel);
       x = x + movimiento;
        break;
    default:
        console.log("otra tecla");
        break;   
}
function dibujarTeclado(evento)

var colorcito = "green";
var movimiento = 12;
switch(evento.keyCode)
{
    case teclas.UP:
       dibujarLinea(colorcito, x, y,x, y - movimiento, papel);
        y = y - movimiento;
        break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y,x, y + movimiento, papel);
        y = y + movimiento;
        break;
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y,x  - movimiento, y, papel);
       x = x - movimiento;
        break;
    case teclas.RIGHT:
        dibujarLinea(colorcito, x, y,x + movimiento, y, papel);
       x = x + movimiento;
        break;
    default:
        console.log("otra tecla");
        break;   
}