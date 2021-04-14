var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");/*cria o form e traz p/ JS*/
    var paciente = obtemPacienteDoFormulario(form);/*EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM*/
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    /*pacienteTr.classList.add("paciente"); /*PARA CRIAR UMA CLASSE, VOU PEGAR MEU OBJETO TR (PACIENTETR), ACESSAR A PROPRIEDADE CLASSLIST.ADD (.ADD ADICIONA UMA CLASSE)
      adicionaPacienteNaTabela(paciente);*/

    form.reset();/*limpa os campos do formulário*/
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});
function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);/*CRIA A TR E O TD DO PACIENTE*/
    var tabela = document.querySelector("#tabela-pacientes");/*ADICIONA O PACIENTE NA TABELA*/
    tabela.appendChild(pacienteTr);/*tabela coloca como filho o child q eu acabei de criar*/
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; /*edita o HTML interno de um elemento, basta passar o novo conteúdo por parâmetro para a propriedade. innerHTML é uma propriedade, não uma função, então ela recebe o novo conteúdo, ou seja, utilizamos um sinal de igual (=):*/

    erros.forEach(function(erro){/*forEach = for, só q n preciso passar os parametros pq ele já sabe os limites. array de erros, pra cada item é executada a funçao abaixo (q recebe o item q estou passando, cria uma li, preenche c/ o valor do erro e coloca dentro da ul.  Em JavaScript, todo array possui a função forEach. Passamos para ela uma função por parâmetro, e nessa função fazemos o que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna.*/
       var li = document.createElement("li"); 
       li.textContent = erro;
       ul.appendChild(li);
    });
}
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

/*essa fç monta a Tr, coloca uma classe na Tr, pra Tr ela vai colocar um filho Td, que ela vai criar com a fç montaTd*/
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");/*cria paciente*/
    pacienteTr.classList.add("paciente");
        
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
   
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválida");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }


    return erros;
}