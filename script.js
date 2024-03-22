function chamada(numero) {
   var numeroDigitado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numeroDigitado + numero;
}

function clean(num) {
    document.getElementById('resultado').innerHTML= " "; //apaga todos os números
}

function limparnumero(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //apaga apenas um número digitado.
}

function calcular () {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else {
        document.getElementById('resultado').innerHTML = "Sem Calculos"
        
    }

    
}