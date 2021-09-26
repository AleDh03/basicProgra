let user = prompt("Cual es tu peso?");
let planet = prompt("Elije tu planeta\n1 es marte, 2 es Jupiter");
let weight = parseInt(user);
let theGravityOfTheEarth = 9.8;
let gravityMars = 3.7;
let gravityJupiter = 24.8;
let lastWeight;
let name;


if (planet == 1) {
  lastWeight = (weight * gravityMars) / theGravityOfTheEarth
  name = "mars";
} else if (planet == 2) {
  pesoFinal = pesoFinal = (weight * gravityJupiter) / theGravityOfTheEarth;
  name = "Jupiter";
} else {
  last_Weight = 100000;
  name = "Krypton";
}
last_Weight = parseInt(last_Weight);



document.write(
  "Tu peso en " + name + " es <strong>" + last_Weight + " kilos</strong>"
);