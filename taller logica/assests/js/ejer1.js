let div1 =document.querySelector("#logic1");
let formularioN = document.querySelector("#inputN");
let botonsumar = document.querySelector("#btnsumar");
let resultado = document.querySelector("#resultado1");


botonsumar.addEventListener('click', function () {
    let numerofor = parseInt(formularioN.value);
    let sumatoria = 0;
    console.log(numerofor);

    for (let x = 1; x <= numerofor; x++) {
        sumatoria = sumatoria + x;
    }
    resultado.innerHTML = `el resultado de la sumatoria es ${sumatoria}`;
})