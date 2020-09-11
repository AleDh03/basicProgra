var imágenes = [];
imágenes["Cauchin"] = "cauchin.png";
imágenes["Pokacho"] = "pokacho.png";
imágenes["Tocinauro"] = "tocinauro.png";

var colección = [];
colección.push(new Pakiman("Cauchin", 100, 30));
colección.push(new Pakiman("Pokacho", 80, 50));
colección.push(new Pakiman("Tocinauro", 120, 40));

for (var alejo of colección) {
  alejo.mostrar();
}
for (var x in colección[0]) {
  console.log(x);
}
