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
    // console.log(promedio);
    // return promedio;

    const resp1 =document.getElementById("respuesta1Pro");
    const resp = document.getElementById("respuestaPro");
    resp1.innerText = "El promedio es: "
    resp.innerText = " " + promedio;

}

let lis = [];

function pro (){
    const inputPromedio = document.getElementById("inputPromedio");
    const prue = inputPromedio.value;
//    prue = prue.replace(/['"]+/g, '');
    
    if(prue > 0){
        lis.push(Number(prue));

        //Estas lineas de codigo crea nuevas lineas de <li> en html
        const listas = document.createElement('li');
        const num = document.createTextNode(prue);//Aqui es lo que ira dentro de la <li>
        const elementoPadre = document.querySelector('.padre');//El .padre es una class en el html

        elementoPadre.appendChild(listas);//Esto agrega el contenido de listas al elemeto padre
        listas.appendChild(num);//Esto agrega la variable num ala variable lista, el elemnto padre

        newlis = [];
    }else{
        alert("escribe");
    }
} 