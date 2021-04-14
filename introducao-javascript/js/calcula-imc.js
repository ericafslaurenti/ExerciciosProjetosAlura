var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");/*retorna uma lista de todos os pacientes*/

for(var i = 0; i < pacientes.length; i++){/*var i inicia no 0; i vai até o final da lista de pacientes; i + cada paciente*/
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso"); /*busca dentro do tr (paciente) a td q tem classe peso*/
    var peso = tdPeso.textContent; /*o peso é o conteudo de texto do meu td*/

    var tdAltura = paciente.querySelector(".info-altura");/*busca dentro do tr (paciente) a td q tem classe altura*/
    var altura = tdAltura.textContent;/*a altura é o conteudo de txt do meu td*/

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); /* vai ter true ou false*/
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){ /*só vai entrar nesse if se der valor inválido (é uma variável negativa)*/
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(){
    if(peso >= 0 && peso < 1000){
        return true;    
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

titulo.addEventListener("click", function (){
    console.log("fui clicado.");
})
