let btclacular = document.querySelector("#calcular")
btclacular.addEventListener('click', function () {
    let promedio =parseFloat(document.querySelector ("#proediom").value)

    let promba = 3.0;
    let valorMatricula = 1000000;
    let resultpro = " "
    let descuento = 0;
    resultpro = document.querySelector("#totalpro");
    
    if (promedio <= promba) {

        resultpro.textContent= " Lo sentimos su promedio no le alcanza para un yogurt estudia mas no se le puede aplicar el descuento"
    }
    else if (promedio > promba && promedio <= 4) {
        descuento = valorMatricula * 0.05;
        resultpro.textContent = `Felicitaciones se ha ganado el 5% de la matricula y el descuento es de: ${descuento}`;  
    }
    else if (promedio >= 4) {
        descuento = valorMatricula * 0.5;
        resultpro.textContent = `felicitaciones usted se ha ganado el 50% de la matricula  solo tiene que pagar${descuento} `;
    }



})