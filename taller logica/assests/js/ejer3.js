let alldiv = document.querySelector ("#logic3");
let enviar = document.querySelector("#b-enviar");

enviar.addEventListener('click', function () {
    let age = document.querySelector("#edadp").value
    let gender = document.querySelector("#genero").value
    let premio = "";
    let premios = document.querySelector("#premios")
    console.log(age);
    console.log(gender);
    if (age <= 10 && gender == "mujer") {
        premio = "Gracias por participar su premio ha sido un jugo"
    }
    else if (age <= 10 && gender == "hombre") {
        premio = " Gracias por participar su premio ha sido un jugo"
    }
    else if (age >= 18 && gender == "mujer") {
        premio = " Felicitaciones ha ganado una cerveza y una pizza Hawaiana "

    }
    else if (age >= 18 && gender == "hombre") {
        premio = "Felicitaciones usted ha ganado una cerveza y una pizza tres carnes"
    }

    else {
        premio = " Lo sentimos usted no aplica para ningun premio"
    }
    
    premios.innerHTML=premio;

})