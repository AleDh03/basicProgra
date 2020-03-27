var cuadroC = document.getElementById("area_de_dibujo");
var papel = cuadroC.getContext("2d");
document.addEventListener("mousedown",dibujarMouseDown)
document.addEventListener("mouseup",dibujarMouseUp)

//.........Variables..........//
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var xI;
var yI;

//........Recuadro del borde.........//
dibujarLinea("pink",0,0,0,300,papel);
dibujarLinea("pink",0,0,300,0,papel);
dibujarLinea("pink",300,300,0,300,papel);
dibujarLinea("pink",300,0,300,300,papel);

//...........Funciones.........//
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth=3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujarMouseDown(evento2)
{
  var posiX=evento2.layerX;
  var posiY=evento2.layerY;
  if (posiX>301 || posiY>301) {
console.log("Fuera de canvas");
  } else {
    xI=posiX;
    yI=posiY;
  }
  }
  function dibujarMouseUp(evento2)
  {
 dibujarLinea("red",xI,yI,evento2.offsetX,evento2.offsetY,papel);
  }