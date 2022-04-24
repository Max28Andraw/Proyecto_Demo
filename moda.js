// const lista1 = [2, 5,3,5,4,1,2,5,4,2,4,5];



function moda(){
    const lista1 = lis;
    const lista = {};

    lista1.map( function (elemento){//Este metodo crea arrays con las veces que aparecedentro del objeto lista.
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
    const elnum = moda [0];
    const lasvez = moda [1];
    console.log(elnum);
    
    // return moda;
    const resp1 =document.getElementById("respuesta1Moda");
    const resp = document.getElementById("respuestaModa");
    resp1.innerText = "La Moda es: "
    resp.innerText = " " + elnum + " (" + lasvez + ")";
}