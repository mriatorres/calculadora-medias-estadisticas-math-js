
//input usuario

function calcularAritmetica() {
   

    // Selecting the input element and get its value 
    let inputVal = document.getElementById("inputAritmetica").value;
    console.log(inputVal);
    const separado = inputVal.split(",");

    let numeros = [];

    separado.forEach(element => {
        numeros.push(Number(element));
    });
    
    //sumar datos
    const sumaDatos = MediasEstadistica.sumarDatos(numeros);
    //division datos
    const divisionDatos = MediasEstadistica.dividirSumDatosEntreNumDatos(sumaDatos, numeros);
    //resultado a string
    const resultadoAritS = divisionDatos;
   
    swal({
        title: 'Resultado Media Aritmetica',
        text: resultadoAritS
    }); 
    
}   

function calcularPonderada(){
    

    // Selecting the input element and get its value 
    let inputVal = document.getElementById("moderada").value;
    // Displaying the value
    const separado = inputVal.split(",");

    let numeros1 = [];
    console.log(numeros1);

    separado.forEach(element => {
        numeros1.push(Number(element).toFixed(2));
    });

    let inputVal2 = document.getElementById("moderada2").value;

    const separado2 = inputVal2.split(",");

    let numeros2 = [];

    separado2.forEach(element => {
        numeros2.push(Number(element));
    });

    console.log(numeros2);

    //datos por peso
    const datosPorPeso = MediasEstadistica.multiDatosPorPeso(numeros1, numeros2);
    console.log(datosPorPeso);
    //sumar pesos
    const sumaDatosPorPesos = MediasEstadistica.sumarDatos(datosPorPeso);
    console.log(sumaDatosPorPesos);
    //sumar pesos
    const sumarPesos = MediasEstadistica.sumarDatos(numeros2);
    //Dividir pesos entre datos
    const pesosEntreDatos = MediasEstadistica.valor1SobreValor2(sumaDatosPorPesos, sumarPesos);
    console.log(pesosEntreDatos);
    //Resultado a string
    const resultadoPondS = pesosEntreDatos.toString();
   
    swal({
        title: 'Resultado Media Ponderada',
        text: resultadoPondS
    }); 
    
    
}

function calcularCuadratica(){
    let inputVal = document.getElementById("cuadratica").value;
    // Displaying the value
    console.log(inputVal);
    const separado = inputVal.split(",");

    let numeros = [];

    separado.forEach(element => {
        numeros.push(Number(element).toFixed(2));
    });

    //Elevar datos al cuadrado
    const datosAlCuadrado = MediasEstadistica.datosAlcuadrado(numeros);
    //Sumar datos al cuadrado
    const sumarCuadrados = MediasEstadistica.sumarDatos(datosAlCuadrado);
    //Dividir resultado suma entre numero de datos
    const dividirDatosCuad = MediasEstadistica.dividirSumDatosEntreNumDatos(sumarCuadrados, numeros);
    //Sacar raiz datos al cuadrado
    const raiz = MediasEstadistica.raizCuadradaDato(dividirDatosCuad);

    //Resultado a string
    const resultadoCuadS = raiz.toString();

    swal({
        title: 'Resultado Media Cuadratica',
        text: resultadoCuadS
    }); 
   

    
}

function calcularArmonica (){
    let inputVal = document.getElementById("armonica").value;
    // Displaying the value
    console.log(inputVal);
    const separado = inputVal.split(",");

    let numeros = [];

    separado.forEach(element => {
        numeros.push(Number(element).toFixed(2));
    });

    //Se crean fracciones
    const fracciones = MediasEstadistica.crearFraccionesArmonicas(numeros);
    console.log(fracciones);
    //sumar resultado fracciones
    const sumaFracciones = MediasEstadistica.sumarDatos(fracciones);
    console.log(sumaFracciones); 
    //Dividir numero de datos entre suma fracciones
    const divisionDatosArm = Number(MediasEstadistica.dividirNumDatosEntreSumDatos(numeros, sumaFracciones).toFixed(2));
    console.log(divisionDatosArm);
    //Resultado a string
    const resultadoArmS = divisionDatosArm.toString();
    swal({
        title: 'Resultado Media Armonica',
        text: resultadoArmS
    }); 
   

}

function calcularGeometrica(){
    let inputVal = document.getElementById("geometrica").value;
    console.log(inputVal);
    const separado = inputVal.split(",");

    let numeros = [];

    separado.forEach(element => {
        numeros.push(Number(element).toFixed(2));
    });

    //multiplicar datos
    const multiplicarDatos = MediasEstadistica.multiplicarDatos(numeros);
    console.log(multiplicarDatos);
    //hallar raiz 
    const hallarRaiz = Number(MediasEstadistica.hallarNRaizConNumDatos(multiplicarDatos, numeros).toFixed(2));
    console.log(hallarRaiz);

     //resultado a string
     const resultadoGeoS = hallarRaiz.toString();

     swal({
        title: 'Resultado Media Geometrica',
        text: resultadoGeoS
    }); 
     
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
