// função para o botão 

function guardaFormulario() {

    var formsCliente = new Object();

    formsCliente.nome = document.getElementById('nome').value;
    formsCliente.sobrenome = document.getElementById('sobrenome').value;
    formsCliente.data = document.getElementById('data').value;
    formsCliente.email = document.getElementById('email').value;
    formsCliente.cpf = document.getElementById('cpf').value;
    formsCliente.telefone = document.getElementById('telefone').value;
    formsCliente.estado = document.getElementById('estado').value;

//Converter para String Json

var jsonForm = JSON.stringify(formsCliente);

//exibir

console.log(formsCliente.valueOf());

    document.getElementById('nome1').innerHTML = "<br>Nome: </br>" + formsCliente.nome;
    document.getElementById('sobrenome1').innerHTML = "<br>Sobrenome: </br>" + formsCliente.sobrenome;
    document.getElementById('data1').innerHTML = "<br>Data: </br>" + formsCliente.data;
    document.getElementById('email1').innerHTML = "<br>Email: </br>" + formsCliente.email;
    document.getElementById('cpf1').innerHTML = "<br>CPF: </br>" + formsCliente.cpf;
    document.getElementById('telefone1').innerHTML = "<br>Telefone: </br>" + formsCliente.telefone;
    document.getElementById('estado1').innerHTML = "<br>Estado: </br>" + formsCliente.estado;

    window.print('imprimir');
}


