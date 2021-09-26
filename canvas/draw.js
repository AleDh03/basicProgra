// var text = document.getElementById("drawing__lines");
// var button = document.getElementById("button");
// button.addEventListener("click", dibujoPorClick );
// var d = document.getElementById("canvas__space");
// var width = d.width;
// var lienzo = d.getContext("2d");
// context.fillRect(299, 1, 1, 299);


// function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
// {
//   lienzo.beginPath();
//   lienzo.strokeStyle = color;
//   lienzo.moveTo(xInicial, yInicial);
//   lienzo.lineTo(xFinal, yFinal);
//   lienzo.stroke();
//   lienzo.closePath();
// }

// function dibujoPorClick()
// {
//   let lines = parseInt(text.value);
//   let l = 0;
//   let yI, xF;
//   let lines_color = "#6a097d";
//   let space = width / lines;

//   for(l = 0; l < lines; l++)
//   {
//     yI = space * l;
//     xF = space * (l + 1);
//     dibujarLinea(lines_color, 0, yI, xF, 300);
//     console.log("Lines " + l);
//   }

//   dibujarLinea(lines_color, 1,1,1,299);
//   dibujarLinea(lines_color, 1,299,299,299);
// }

