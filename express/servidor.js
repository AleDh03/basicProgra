var express = require("express");
var aplicación = express();

aplicación.get("/", inicio);
aplicación.get("/cursos", cursos);

function inicio(petición, resultado) {
  resultado.send("This is the <strong>home</strong> great!!");
}

function cursos(petición, resultado) {
  resultado.send("these are the <strong>curses</strong>");
}

aplicación.listen(8989);
