// “Lo que no se define no se puede medir. Lo que no se mide no se puede mejorar. Y todo lo que no se mejora, bien sea cualitativa o cuantitativamente està condenado a la degradaciòn”


var vp = document.getElementById("villap");
var papel = vp.getContext("2d");

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  A: 65,
  W: 87,
  D: 68,
  S: 83,
};

var fondo = {
  url: "tile.png",
  cargaOK: false,
};
var vaca = {
  url: "vaca.png",
  cargaOK: false,
};

var pollo = {
  url: "pollo.png",
  cargaOK: false,
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
};

var cantidad = aleatorio(1, 10);
var cantidad_Pollos = 2;
var cantidad_Cerdos = 1;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarc() {
  vaca.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
//Desafio numero 1: dibujar de una manera vacas, pollos y cerdos.
//Desafio numero 2: tener un solo cerdo que se mueva con las flechas.
//
