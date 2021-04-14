var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); /*animação*/
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});
    
    /*event.target.parentNode.remove(); ----- substituido por:event.target.parentNode.classList.add("fadeOut"); - q vai fazer a linha sumir aos poucos*/
    /*var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; comentári: TR = paciente = remover
    paiDoAlvo.remove() ---- substituido por: event.target.parentNode.remove()*/
      
/*
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        console.log("Fui clicado com um duplo click");
        this.remove(); /*this é quem sofreu o evento (2 cliques) a quem ele está atrelado (paciente)
    });
});*/