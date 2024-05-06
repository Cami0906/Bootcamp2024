let btnSubmit = document.querySelector("#btnenviar");
btnSubmit.addEventListener('click', function () {
    let numero = document.querySelector("#valorm").value
    let resultado = document.querySelector("#resultmulti")

    resultado.innerHTML = "";
    for (let z = 1; z <= 10; z++) {
        let m = numero * z

        resultado.innerHTML += numero + "*" + z + " = " + " " + m + "<br>";
    }

})