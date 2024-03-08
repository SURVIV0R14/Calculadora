var a;
var b;
var operacion;
const resultado = document.getElementById('datos');

function capturarDatos() {
    const resultado = document.getElementById('datos');
    const btn7 = document.getElementById('7');
    const btn8 = document.getElementById('8');
    const btn9 = document.getElementById('9');
    const btn4 = document.getElementById('4');
    const btn5 = document.getElementById('5');
    const btn6 = document.getElementById('6');
    const btn1 = document.getElementById('1');
    const btn2 = document.getElementById('2');
    const btn3 = document.getElementById('3');
    const btn0 = document.getElementById('0');
    const btnClear = document.getElementById('clear');
    const btnDelete = document.getElementById('delete');
    const btnSuma = document.getElementById('suma');
    const btnDivision = document.getElementById('/');
    const btnMultiplicacion = document.getElementById('x');
    const btnResta = document.getElementById('-');
    const btnIgual = document.getElementById('=');


    btn1.onclick = function(){
        resultado.value = resultado.value + "1";
        console.log(resultado);
    }
    btn2.onclick = function(){
        resultado.value = resultado.value + "2";
    }
    btn3.onclick = function(){
        resultado.value = resultado.value + "3";
    }
    btn4.onclick = function(){
        resultado.value = resultado.value + "4";
        console.log(resultado);
    }
    btn5.onclick = function(){
        resultado.value = resultado.value + "5";
    }
    btn6.onclick = function(){
        resultado.value = resultado.value + "6";
    }
    btn7.onclick = function(){
        resultado.value = resultado.value + "7";
        console.log(resultado);
    }
    btn8.onclick = function(){
        resultado.value = resultado.value + "8";
    }
    btn9.onclick = function(){
        resultado.value = resultado.value + "9";
    }
    btn0.onclick = function(){
        resultado.value = resultado.value + "0";
    }
    btnClear.onclick = function(){
        resultado.value = "";
    }
    btnDelete.onclick = function(){
        resultado.value = "";
    }
    btnSuma.onclick = function(){
        a = resultado.value;
         operacion = "+";
         limpiar();
    }
    btnResta.onclick = function(){
        a = resultado.value;
         operacion = "-";
         limpiar();
    }
    btnMultiplicacion.onclick = function(){
        a = resultado.value;
         operacion = "*";
         limpiar();
    }
    btnDivision.onclick = function(){
        a = resultado.value;
         operacion = "/";
         limpiar();
    }
    btnIgual.onclick = function(){
        a = resultado.value;
         operacion = "=";
         limpiar();
    }
}
function limpiar(){
    resultado.value = "";
    console.log("limpio")
}
function resetear(){
    
}