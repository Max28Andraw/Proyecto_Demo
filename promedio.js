function calcularPromedio (lista){
    // let sumalista = 0; //Es un metodo usando For

    // for (let i = 0; i < lista.length; i++){
    //     sumalista = sumalista + lista[i];
    // }
    
    // const sumalista = lista.reduce( //Esta es otra forma con el metodo reduce de Array
    // function (acumulador = 0, valorActual){
    // return acumulador + valorActual;
    // })

    const sumalista = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0 /*Este valor es del acumulador*/) //Esta es otra forma con el metodo reduce de Array más simplificado

    const promedio = sumalista / lista.length;
    return promedio;
}

