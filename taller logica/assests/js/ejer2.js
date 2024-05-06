let div2 = document.querySelector ("#logic2");
let caja = document.querySelector("#inputN1");
let caja2 = document.querySelector("#caja2");
let valor = document.querySelector("#valor1");

caja2.addEventListener('click', function () {

    let numerox = parseInt(caja.value);

    if (numerox % 2 == 0) {

        document.querySelector("#valor1").innerHTML = "el numero que ingreso es un numero par"
    }

    else {
        document.querySelector("#valor1").innerHTML = "El numero ingresado es un numero impar"
    }


})