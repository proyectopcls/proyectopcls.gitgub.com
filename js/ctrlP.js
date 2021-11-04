"use strict";

var forma = document.getElementById ("forma"),

resultado = document.getElementById("resulP");

forma.addEventListener("submit",procesa,false);

function procesa(){
var base =parseInt( forma["base"].value);
var res=Math.sqrt(base);

forma["resulP"].value=res.toFixed(2);

}
