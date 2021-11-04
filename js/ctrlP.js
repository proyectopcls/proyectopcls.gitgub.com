"use strict";
var forma = document.getElementById ("forma"),
     salidaP = document.getElementById("salidaP");
forma.addEventListener("submit",procesa,false);

function procesa(){
    var base =parseInt( forma["base"].value);
    var res="";
    for (var i = 0; i <= 10; i++) {
         res=res+ base +"^" +i+ "="+potencia(base,i)+"\n";
        
    }
   forma["salidaP"].value=res;
}

function potencia(num1,num2){
     const base = num1;
          const exponente = num2;
          let r = 1;
          let i = 0; 
          while(i < exponente){
              r = r * base;
              i++;
          }
          return (r);
}
