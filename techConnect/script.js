let botao = document.querySelector("#cadastrar");
//Variáveis mensagem
let mensagem_nome = document.querySelector("#mensagem_nome");
let mensagem_email = document.querySelector("#mensagem_email");
let label_email = document.querySelector("#label_email");

//Variáveis campo nome
let nome = document.querySelector("#nome");

//Variáveis campo email
let email = document.querySelector("#email");
let add_email = document.querySelector('#add_email');
let novo_email = document.querySelector('#novo_email');
let new_email = document.querySelector('#new_email');

//Variáveis campo telefone
let telefone = document.querySelector("#telefone");

//Variáveis campo senha
let senha = document.querySelector("#senha");
let confirm_senha = document.querySelector("#confirm_senha");
let maiuscula = document.querySelector("#maiuscula");

//Essa variável é um regex que valida se o nome possui números ou caracteres especiais
let validar_nome = /^[^\0-9@#$%&*]+$/;
let validar_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let validar_telefone = /^+([1-9]{2}+)[0-9]{5}+-[0-9]{4}+$/

//Esse bloco de código válida se o usuário colocou algum número ou caracter especial(Ex: @, #, $, %) no campo nome. Essa validação é possível por meio do regex da variável validar_nome. Se o campo nome estiver errado o JS envia a mensagem de erro "Nome inválido! Seu nome não pode conter números ou caracteres especiais".
nome.addEventListener("keyup", function() {
    //validar_nome.test -> valida se o padrão do regex existe na string
    if (!validar_nome.test(nome.value)){
        mensagem_nome.textContent = "Nome inválido! Seu nome não pode conter números ou caracteres especiais."
        mensagem_nome.classList.toggle("erro");
        return;
    }else{
        mensagem_nome.textContent = "";
    }
})

botao.addEventListener("click", function() {
    if (!validar_email.test(email.value)){
        mensagem_email.textContent = "Email inválido! Verifique se seu email segue o padrão: email@email.com"
        mensagem_email.classList.toggle("erro");
        return;
    }
})

// n = 0
// add_email.addEventListener("click", function(){
//     novo_email.appendChild("input");
// })
let letrasM = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",. "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
senha.addEventListener("click", function() {
    if (senha.value.includes(letrasM)) {
        maiuscula.classList.toggle("certo");
    }
});
botao.addEventListener("click", function () {
    if (nome && email && telefone && senha && endereço !== "") {
    mensagem.textContent = "Cadastrado!";
    }
});