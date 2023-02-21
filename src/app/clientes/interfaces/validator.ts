export enum pattern {
  numeros = "^([0-9]\.*)$",
  email = "^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$",
  nombres = "([a-zA-Z]+) ([a-zA-Z]+)",
  letras = "^[a-zA-Z]*$",
  noDecimales = "[0-9]+",
  letrasSpaces = "^[a-zA-Z/s]*$"
}