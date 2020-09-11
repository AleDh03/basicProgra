class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

function yourMoney() {
  var total = document.getElementById("money");
  money = parseInt(total.value);
  for (var billete of box) {
    if (money > 0) {
      div = Math.floor(money / billete.valor);

      if (div > billete.cantidad) {
        papers = billete.cantidad;
      } else {
        papers = div;
      }
      delivered.push(new Billete(billete.valor, papers));
      money = money - billete.valor * papers;
    }
  }

  if (money > 0) {
    resultado.innerHTML = "Hey dude Sorry, No enough money  ";
  } else {
    for (var e of delivered) {
      if (e.cantidad > 0) {
        resultado.innerHTML +=
          e.cantidad + " " + "billetes de $" + e.valor + "</br>";
      }
    }
  }
}

var box = [];
var delivered = [];
box.push(new Billete(100, 5));
box.push(new Billete(50, 10));
box.push(new Billete(20, 5));
box.push(new Billete(10, 10));
box.push(new Billete(5, 5));

var money = 0;
var div = 0;
var papers = 0;

var resultado = document.getElementById("resultado");
var button = document.getElementById("takeYourMoney");
button.addEventListener("click", yourMoney);
