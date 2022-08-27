"use strict";

/* TODO */


/* FUNCIONES */
function ingresar() {
  do {
    var valor = +prompt("Ingrese un número");
    var flag = false;
    if (isNaN(valor)) {
      alert("Ingrese un valor numérico")
      flag = true;
    }
  } while (flag);
  localStorage.setItem("Valor", valor);
  return valor;
}

function mostrar() {
  if (localStorage.getItem("Valor")) {
    if (!parseInt(localStorage.getItem("Valor"))) {
      alert("El valor ingresado es 0")
    } else if (!(localStorage.getItem("Valor") % 2)) {
      alert("El valor ingresado es par")
    } else {
      alert("El valor ingresado es impar")
    }
  }
}

/******************/
/* var numero=insertar();
mostrar(numero); */