class Pakiman {
  constructor(name, live, attack) {
    this.imagen = new Image();
    this.name = name;
    this.live = live;
    this.attack = attack;

    //carga la imagen y su descripción
    this.imagen.src = imágenes[this.name];
  }

  hablar() {
    alert(this.name);
  }

  mostrar() {
    document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.name + "</strong><br />");
    document.write("live: " + this.live + "<br />");
    document.write("attack: " + this.attack + "<hr />");
  }
}
