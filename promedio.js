function calcularPromedio (){
    // let sumalista = 0; //Es un metodo usando For

    // for (let i = 0; i < lista.length; i++){
    //     sumalista = sumalista + lista[i];
    // }
    
    // const sumalista = lista.reduce( //Esta es otra forma con el metodo reduce de Array
    // function (acumulador = 0, valorActual){
    // return acumulador + valorActual;
    // })
    const lista = lis;
    const sumalista = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0 /*Este valor es del acumulador*/) //Esta es otra forma con el metodo reduce de Array más simplificado

    const promedio = sumalista / lista.length;
    console.log(promedio);
    return promedio;
}

let lis = [];

function pro (){
    const inputPromedio = document.getElementById("inputPromedio");
    const prue = inputPromedio.value;
//    prue = prue.replace(/['"]+/g, '');
    lis.push(Number(prue));
    console.log(lis);
}

