// const lista1 = [2, 5,3,5,4,1,2,5,4,2,4,5];



function moda(lista1){
    const lista = {};

    lista1.map( function (elemento){
        if(lista[elemento]){
            lista[elemento] += 1;
        }else{
            lista[elemento] = 1;
        }
    });

    const listaArray = Object.entries(lista).sort(function(a,b){
        return a[1] - b[1];
    });

    const moda = listaArray[listaArray.length - 1];
    
    return moda;
}