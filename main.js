//scroll entre secciones

//Datos usuario
function ingreso () {
    const valor = prompt('Ingrese numeros separados por coma');
    const separado = valor.split(',');

    let numeros = [];

    separado.forEach(element => {
        numeros.push(Number(element));
    })
        return numeros;
}

//Botones calcular
const btnAritmetica = document.getElementById('btnAritmetica');
btnAritmetica.addEventListener('click', calcularAritmetica());


function calcularAritmetica (){
    console.log('boton aritmetica oprimido');

}

const btnPonderada = document.getElementById('btnPonderada');
const btnCuadratica = document.getElementById('btnCuadratica');

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