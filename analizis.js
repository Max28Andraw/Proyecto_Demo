const salrioMex = mexico.map(function(persona){
    return persona.salario;
});

const salarioOrden = salrioMex.sort(function(a, b){
    return a - b;
});

function calcularPromedio (lista){
    const sumalista = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0 /*Este valor es del acumulador*/) //Esta es otra forma con el metodo reduce de Array más simplificado

    const promedio = sumalista / lista.length;
    return promedio;
}

function esPar(numero){
    return (numero % 2 === 0);//Si esta operacion resulta correcta devolvera true sino false
}

function mediana (lista){
    const medio = parseInt(lista.length / 2);
    
    if(esPar(lista.length)){
        const contador1 = lista[medio];
        const contador2 = lista[medio - 1];

        return calcularPromedio([contador1,contador2]);
    }else{
        return lista[medio];
    }
}

//Calculo de la media de los Top 10%

const spliceStart = (salarioOrden.length * 90) / 100;
const spliceCount = salarioOrden.length - spliceStart;

const salariosMexTop10 = salarioOrden.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Mex = mediana(salariosMexTop10);
const medianaGeneralMex = mediana(salarioOrden);

console.log({
  medianaGeneralMex,
  medianaTop10Mex,
});