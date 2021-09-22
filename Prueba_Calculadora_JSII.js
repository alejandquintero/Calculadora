function iniciar(){
    //variables
    var resultado = document.getElementById("resultado");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var coma = document.getElementById("coma");
    var reset = document.getElementById("reset");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var sin = document.getElementById("SIN");
    var cos = document.getElementById("COS");
    var num1;
    var num2;
    var operacion;
    var firstClick = false; 
    //Eventos
    
    uno.onclick = function(e){
        resultado.innerHTML += "1"
    }
    dos.onclick = function(e){
        resultado.innerHTML += "2"
    }
    tres.onclick = function(e){
    resultado.innerHTML += "3"
    }
    cuatro.onclick = function(e){
        resultado.innerHTML += "4"
    }
    cinco.onclick = function(e){
        resultado.innerHTML += "5"
    }
    seis.onclick = function(e){
    resultado.innerHTML += "6"
    }
    siete.onclick = function(e){
        resultado.innerHTML += "7"
    }
    ocho.onclick = function(e){
        resultado.innerHTML += "8"
    }
    nueve.onclick = function(e){
    resultado.innerHTML += "9"
    }
    cero.onclick = function(e){
        resultado.innerHTML += "0"
    }
    reset.onclick = function(e){
        resultado.innerHTML ="";
        firstClick = false;
        num1 ="";
        num2 =""    
    }    
    coma.onclick = function(e){
        if (!firstClick){
        resultado.innerHTML += ".";
        firstClick = true
        }
    }
    //Operaciones
    suma.onclick = function(e){
        num1 = parseFloat(resultado.innerHTML);
        resultado.innerHTML = "";
        operacion = "suma";
        firstClick = false
    }
    resta.onclick = function(e){
        num1 = parseFloat(resultado.innerHTML);
        resultado.innerHTML = "";
        operacion = "resta";
        firstClick = false
    }
    multiplicacion.onclick = function(e){
        num1 = parseFloat(resultado.innerHTML);
        resultado.innerHTML = "";
        operacion = "multiplicacion";
        firstClick = false
    }
    division.onclick = function(e){
        num1 = parseFloat(resultado.innerHTML);
        resultado.innerHTML = "";
        operacion = "division";
        firstClick = false
    }
    sin.onclick = function(e){
        num1 = parseFloat(resultado.innerHTML);
        resultado.innerHTML = Math.sin(num1)
    }
    cos.onclick = function(e){
        num1 = parseFloat(resultado.innerHTML);
        resultado.innerHTML = Math.cos(num1)
    }
    //Resultado
    igual.onclick = function(e){
        num2 = parseFloat(resultado.innerHTML)
        if (operacion == "suma"){
            resultado.innerHTML = num1 + num2
        }else if (operacion == "resta"){
            resultado.innerHTML = num1 - num2
        }else if (operacion == "multiplicacion"){
            resultado.innerHTML = num1 * num2
        }else if (operacion == "division"){
            resultado.innerHTML = num1 / num2 
        }
        firstClick = false
    }
}



