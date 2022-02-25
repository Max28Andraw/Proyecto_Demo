function valor(){
    const input = document.getElementById("inputCuadrado");
    return value = input.value;
}

function perimetroCuadrado (){
    const perimetro = valor() * 4;
    alert(perimetro + " cm.");
}
function areaCuadrado (){
    const area = valor() * valor();
    alert(area + " cm^2.");
}

function altura(){
    const base = document.getElementById("inputTrianguloBase");
    const b = base.value;
    const altura = document.getElementById("inputTrianguloLados");
    const a = altura.value;
    const c = (Math.sqrt((a * a) - ((b * b) / 4)));
    alert(c + " cm");
}