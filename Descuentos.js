function precioconDescuento(precio, descuento){
    const porcentageapagar = 100 - descuento;
    const precioapagar = (precio * porcentageapagar) / 100;
    return precioapagar;
};

function ahorroDescuento(precio, descuento){
    const preciodeldescuento = (descuento / 100) * precio;
    return preciodeldescuento;
}

function buttonDescuento(){//Esta funcion es para calcular el costo a pagar aplicando un porcentage de un descuento
    const inputPrecio = document.getElementById("inputPrecio");
    const inputDescuento = document.getElementById("inputDescuento");
    
    const precio = inputPrecio.value;
    const descuento = inputDescuento.value;

    const precioDescuento = precioconDescuento(precio, descuento);
    const ahorro = ahorroDescuento(precio, descuento);

    const resultado = document.getElementById("Resultado");
    resultado.innerText = "El Precio a pagar es: $" + precioDescuento + " Ahorraste $" + ahorro;
}


function descuentoCupon(){ //Esta funconcion aplica un descuento con el cupon que introdusca 
    const inputPrecio = document.getElementById("inputPrecio");
    const inputDescuento = document.getElementById("inputDescuento");
    const coupons = [
    "Bart",
    "rambo",
    ];
    const precio = inputPrecio.value;
    const cupon = inputDescuento.value; 
    
    let descuento;  
    
    if (cupon === "rambo"){
        descuento = 60;
        const precioDescuento = precioconDescuento(precio, descuento);
        const ahorro = ahorroDescuento(precio, descuento);

        const resultado = document.getElementById("Resultado");
        resultado.innerText = "El Precio a pagar es: $" + precioDescuento + " Ahorraste $" + ahorro;
    }else{
        alert("El cupon no existe");
    }

      
    

    
}