function valor(){
    const input = document.getElementById("inputCuadrado");
    return value = input.value;
}

function perimetroCuadrado (){
    const perimetro = valor() * 4;
    const resul = document.getElementById("ResultadoCuadrado");
    const resul2 = document.getElementById("ResultadoCuadrado2");

    resul.innerText = "El Perimetro es :";
    resul2.innerText = perimetro + " cm.";
}
function areaCuadrado (){
    const area = valor() * valor();
    const resul = document.getElementById("ResultadoCuadrado");
    const resul2 = document.getElementById("ResultadoCuadrado2");

    resul.innerText = "El Área es :";
    resul2.innerText = area + " cm^2.";
}

function altura(){
    const base = document.getElementById("inputTrianguloBase");
    const b = base.value;
    const altura = document.getElementById("inputTrianguloLados");
    const a = altura.value;
    const c = (Math.sqrt((a * a) - ((b * b) / 4)));

    const resul = document.getElementById("ResultadoTriangulo");
    const resul2 = document.getElementById("ResultadoTriangulo2");

    resul.innerText = "La Altura es :";
    resul2.innerText = c + " cm^2.";
}