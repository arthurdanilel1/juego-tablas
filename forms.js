var calif = 0;
var a;
var b;
var i = 0;

function Inicio() {
    //se crean las variables.
    var tabla;
    var i;
    //se da valor a la variable "tabla" con "numb".
    tabla = document.getElementById("numb").value;
    //se condiciona la entrada a ser numerica
    if (tabla == 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) {
        //se busca el elemento "ta" dando el valor de la variable "tabla".
        for (i = 0; i < 10; i++) {
            document.getElementById("ta" + i).innerHTML = tabla;
        }
    } else
        alert("tu valor no es numerico.");
}

function Calificar() {
    var tabla = 0;
    var total = 0;
    var respuestas = 0;
    calif = 0;
    var i = 1;
    tabla = document.getElementById("numb").value;
    while (i <= 10) {
        respuestas = document.getElementById("respuesta" + i).value;
        total = i * tabla;
        if (respuestas == total)
            calif = calif + 1;
        i++;
    }
    alert("tu calificacion es: " + calif);
}

function iniciorand() {
    var max = document.getElementById("max").value;
    a = Math.floor(Math.random() * max + 1);
    b = Math.floor(Math.random() * max + 1);
    if (i < 10) {
        document.getElementById("ta").innerHTML = a;
        document.getElementById("tb").innerHTML = b;
        i = i + 1;
    } else if (i == 10) {
        alert("tu calificacion es: " + calif);
        i = 0;
        calif = 0;
    }
}

function califica() {
    var res = document.getElementById("tabla").value;
    var dat = a * b;
    if (res == dat) {
        alert("correcto");
        calif++;
    } else
        alert("mal");
    iniciorand();
}
