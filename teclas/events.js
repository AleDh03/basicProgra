let squareCanvas = document.getElementById("drawing-area");
let paper = squareCanvas.getContext("2d");
document.addEventListener("mousedown", dibujarMouseDown)
document.addEventListener("mouseup", dibujarMouseUp)

//.........Variables..........//
let square = document.getElementById("drawing-area");
let papel = square.getContext("2d");
var xI;
var yI;

//........Recuadro del borde.........//
dibujarLinea("pink", 0, 0, 0, 300, paper);
dibujarLinea("pink", 0, 0, 300, 0, paper);
dibujarLinea("pink", 300, 300, 0, 300, paper);
dibujarLinea("pink", 300, 0, 300, 300, paper);

//...........Funciones.........//
function dibujarLinea(color, initialX, initialY, finalX, finalY, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(initialX, initialY);
  lienzo.lineTo(finalX, finalY);
  lienzo.stroke();
  lienzo.closePath();
}

// pos = position

function dibujarMouseDown(evento2) {
  var posX = evento2.layerX;
  var posY = evento2.layerY;
  if (posX > 301 || posY > 301) {
    console.log("Fuera de canvas");
  } else {
    xI = posX;
    yI = posY;
  }
}

function dibujarMouseUp(evento2) {
  dibujarLinea("red", xI, yI, evento2.offsetX, evento2.offsetY, papel);
}