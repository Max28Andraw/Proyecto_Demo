function calcularPromedio1 (lista){
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


function calcularMedia(){// Esta funcion calcula la media con los numeros que le demos primero las ordena de menor a mayor con sort().
  const lista1 = lis;
  const lista = lista1.sort( function(a, b){//Con este metodo sort ordena la lista de menor a mayor es mas corto que la Funcion de abajo
      return a - b;
  });
  // console.log(lista);
  const contador = parseInt(lista.length / 2);
  
  if (esPar(lista.length)){
    const contador1 = lista[contador];
    const contador2 = lista[contador - 1];

    const media = calcularPromedio1([contador1, contador2,])

    const resp1 =document.getElementById("respuesta1Media");
    const resp = document.getElementById("respuestaMedia");
    resp1.innerText = "La Media es: "
    resp.innerText = " " + media;
      
  }else{
    const media = lista[contador];
    const resp1 = document.getElementById("respuesta1Media");
    const resp = document.getElementById("respuestaMedia");
    resp1.innerText = "La Media es: "
    resp.innerText = " " + media;
  }
}

var newlis = [];

function ordenar() { //Esta funcion ordena los numeros que le demos de menor a mayor alternativa al metodo sort()
    
  let listaO = lis;
  let paso = 0;
    if(listaO.length > newlis.length){
      // Eliminando todos los hijos del elemento padre que es (padreOrder)
      var element  = document.getElementById("padreOrder");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }    

    if(listaO.length > newlis.length){
      for (let i = 0; i <= listaO.length; i++) {
      for (let j = 0; j < listaO.length; j++) {
        if (listaO[j] > listaO[j + 1]) {
          paso = listaO[j];
          listaO[j] = listaO[j + 1];
          listaO[j + 1] = paso;
          
        }  newlis = listaO;
      }
      }

      
      for (let n = 0; n < listaO.length; n++){
      //Estas lineas de codigo crea nuevas lineas de <li> en html
        const listas = document.createElement('li');
        const num = document.createTextNode(listaO[n]);//Aqui es lo que ira dentro de la <li>
        const elementoPadre = document.querySelector('.padreOrder');//El .padre es una class en el html

        elementoPadre.appendChild(listas);//Esto agrega el contenido de listas al elemeto padre
        listas.appendChild(num);//Esto agrega la variable num ala variable lista, el elemnto padre
        
      }
    }
    
  } 