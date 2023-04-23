const MediasEstadistica = {};


//Elevar los datos al cuadrado
MediasEstadistica.datosAlcuadrado = function (Array) {
    let datosCuadrados = [];
    Array.forEach(element => {
        datosCuadrados.push(Math.pow(element, 2));
    });
    return datosCuadrados;
}

//Sumar los datos elevados al cuadrado
MediasEstadistica.sumarDatos = function (Array) {
    const initialValue = 0;
    const datoSumados = Array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return datoSumados;
    }

//Dividir datos sumados entre cantidad de datos
MediasEstadistica.dividirSumDatosEntreNumDatos = function (Num, Array){
    const datosDivididos =
       Num / Array.length;
        return datosDivididos;
}

//Sacar raiz del resultado de la division
MediasEstadistica.raizCuadradaDato = function (Num){
    const raizDivision =
    Number(
    Math.sqrt(Num).toFixed(2));
    return raizDivision;
}

//Crear fraccion (⅟x)
MediasEstadistica.crearFraccionesArmonicas = function (Array) {
    let fraccionesArmonicas = [];
    Array.forEach( element => 
    {fraccionesArmonicas.push (1/element);
    })
    return fraccionesArmonicas;
}

//dividir cantidad de datos entre suma datos
MediasEstadistica.dividirNumDatosEntreSumDatos= function  (Array, Num) {
    const numDatosDivididos = 
        Array.length / Num;
        return numDatosDivididos;
}

//Multiplicar cada dato por su peso correspondiente
MediasEstadistica.multiDatosPorPeso = function (array, array2) {
    let resultadoMultiPesos = []; 

    for(var i=0; i< array.length; i++) {
        resultadoMultiPesos.push(array[i] * array2[i]);
    }  return resultadoMultiPesos;
}

//Dividir suma datos por pesos entre suma pesos
MediasEstadistica.valor1SobreValor2 = function (Num, Num2){
    const resValor1EntreValor2 = Number((Num / Num2).toFixed(2));
    return resValor1EntreValor2;
}

//Calcular el producto de todos los datos estadísticos de la muestra
MediasEstadistica.multiplicarDatos = function (Array) {
    const datosMultiplicados = Array.reduce((accumulator, currentValue) => accumulator * currentValue);
    return datosMultiplicados;
}

//Raíz n-ésima del producto de todos los valores
MediasEstadistica.hallarNRaizConNumDatos = function (radicando, Array) {
    const indice = Array.length;
        const raizHallada = Math.pow(radicando, 1/indice);

    return raizHallada;
}