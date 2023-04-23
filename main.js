//scroll entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function ingreso () {
    const valor = prompt('Ingrese numeros separados por coma');
    const separado = valor.split(',');

    let numeros = [];

    separado.forEach(element => {
        numeros.push(Number(element));
    })
        return numeros;
}

// function ingreso (valor) {
// valor = document.getElementById('inputUser').values;
// const myArray = valor.split(",");

// let arrayNum = [];
// myArray.forEach(element => {
//     arrayNum.push(Number(element));
// });
//     return arrayNum;
// }

// const resultado = ingreso();

// console.log(resultado);