function calcularPromedio (lista){
    const sumalista = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0 /*Este valor es del acumulador*/) //Esta es otra forma con el metodo reduce de Array más simplificado

    const promedio = sumalista / lista.length;
    return promedio;
}

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }else {
        return false;
    }
}


function calcularMedia (lista1){// Esta funcion calcula la media con los numeros que le demos primero las ordena de menor a mayor con sort().
    const lista = lista1.sort( function(a, b){
        return a - b;
    });
    console.log(lista);
    const contador = parseInt(lista.length / 2);
    
    if (esPar(lista.length)){
        const contador1 = lista[contador];
        const contador2 = lista[contador - 1];

        return calcularPromedio([contador1, contador2,])
        
    }else{
        return lista[contador];
    }
}

function ordenar(listaD) { //Esta funcion ordena los numeros que le demos de menor a mayor alternativa al metodo sort()
    let listaO = listaD;
    let paso = 0;
    for (let i = 0; i <= listaO.length; i++) {
      for (let j = 0; j < listaO.length; j++) {
        if (listaO[j] > listaO[j + 1]) {
          paso = listaO[j];
          listaO[j] = listaO[j + 1];
          listaO[j + 1] = paso;
        }
      }
    }
    return listaO;
  } 