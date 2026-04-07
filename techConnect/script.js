//Variável do botão cadastrar
let botao = document.querySelector("#cadastrar");

//Variáveis mensagem
let mensagem_nome = document.querySelector("#mensagem_nome");
let mensagem_email = document.querySelector("#mensagem_email");
let mensagem_telefone = document.querySelector("#mensagem_telefone")
let mensagem_pais = document.querySelector("#mensagem_pais")
let mensagem_estado = document.querySelector("#mensagem_estado")
let mensagem_cidade = document.querySelector("#mensagem_cidade")
let mensagem_rua = document.querySelector("#mensagem_rua")
let mensagem_bairro = document.querySelector("#mensagem_bairro")
let mensagem_numero = document.querySelector("#mensagem_numero")
let mensagem_cep = document.querySelector("#mensagem_cep")
let mensagem_senha = document.querySelector("#mensagem_senha")
let mensagem_confirm = document.querySelector("#mensagem_confirm")

//Variáveis campo nome
let nome = document.querySelector("#nome");

//Variáveis campo email
let email = document.querySelector("#email");

//Variáveis campo telefone
let telefone = document.querySelector("#telefone");
let div_telefone = document.querySelector("#div_telefone");
let add_telefone = document.querySelector("#add_telefone");

//Variáveis do campo endereço

let pais = document.querySelector("#pais");
let cidade = document.querySelector("#cidade");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let numero = document.querySelector("#numero");
let cep = document.querySelector("#cep");
let estado = document.querySelector("#estado");

//Variáveis campo senha e confirmar senha
let senha = document.querySelector("#senha");
let validarSenha = document.querySelector("#validarSenha");
let confirm_senha= document.querySelector("#confirm_senha");
let mostrar_esconder = document.querySelector("#mostrar_esconder")
let botao_senha = document.querySelector("#botao_senha")

//Essa variável é um regex que valida se o nome possui números ou caracteres especiais. Permite letras maiúsculas, minúsculas, acentos e espaços.
let validar_nome = /^[A-Za-zÀ-ÿ\s]+$/;
//Essa variável é um regex que valida se o email segue o padrão: texto@texto.texto
let validar_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//Essa variável é um regex que valida se o telefone segue o padrão: (00)00000-0000. Permite também que seja (00)0000-0000, para telefones fixos, além de permitir espaços (00) 00000 - 0000. 
let validar_telefone = /^\([1-9]{2}\)\s?[0-9]{4,5}\s?-\s?[0-9]{4}$/;
//Essa variável é um regex que valida os telefones que podem ou não serem adicionados pelo usuário. Ela segue o mesmo padrão da variável validar_telefone.
let validar_novo = /^\([1-9]{2}\)\s?[0-9]{4,5}\s?-\s?[0-9]{4}$/;
//Essa variável é um regex que valida se o nome do país possui números ou caracteres especiais. Permite letras maiúsculas, minúsculas, acentos e espaços.
let validar_pais = /^[A-Za-zÀ-ÿ\s]+$/;
//Essa variável é um regex que valida o número da casa. Permite somente números
let validar_numero = /^[0-9]+$/;
//Essa variável é um regex que valida o CEP, ele segue o padrão: 00000-000, permite o espaço no hífen: 00000 - 000
let validar_cep = /^[0-9]{5}\s?-\s?[0-9]{3}$/;
//Essa variável é um regex que valida se a senha possui pelo menos uma letras maiuscula, uma letra minúscula e um número, sendo que a senha precisa ter no mínimo 8 dígitos.
let validar_senha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/;

//------------------------------------------Campo nome--------------------------------------------
//Esse bloco de código válida se o usuário colocou algum número ou caracter especial(Ex: @, #, $, %) no campo nome. Essa validação é possível por meio do regex da variável validar_nome. Se o campo nome estiver errado o JS envia a mensagem de erro "Nome inválido! Seu nome não pode conter números ou caracteres especiais".

nome.addEventListener("keyup", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (nome.value.trim()===""){
        mensagem_nome.textContent = "";
        return;
    }
    //validar_nome.test -> valida se o padrão do regex existe na string
    if (!validar_nome.test(nome.value)){
        mensagem_nome.textContent = "Seu nome não pode conter números ou caracteres especiais."
        mensagem_nome.classList.add("erro");
        return;
    }else{
        mensagem_nome.textContent = "";
    }
})

//-------------------------------------------Campo email-----------------------------------------
//Esse bloco de código válida o formato de email. Essa validação é possível por meio do regex da variável validar_email. Se o campo email estiver errado o JS envia a mensagem de erro "Formato de email inválido! Exemplo: nome@exemplo.com".

botao.addEventListener("click", function() {
    if (!validar_email.test(email.value)){
        mensagem_email.textContent = "Formato de email inválido! Exemplo: nome@exemplo.com"
        mensagem_email.classList.add("erro");
        return;
    }else{
         mensagem_email.textContent = "";
    }
})

//------------------------------------------Campo Telefone-----------------------------------------
//Esse bloco de código válida o telefone do usuário. Essa validação é possível por meio do regex da variável validar_telefone. Se o campo telefone estiver errado o JS envia a mensagem de erro "Telefone inválido! Formato: (19) 99999-9999".

botao.addEventListener("click", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (telefone.value.trim()===""){
        mensagem_telefone.textContent = "";
        return;
    }
    if (!validar_telefone.test(telefone.value)){
        mensagem_telefone.textContent ="Telefone inválido! Formato: (19) 99999-9999"
        mensagem_telefone.classList.add("erro");
        return;
    }else{
           mensagem_telefone.textContent = "";
    }
})

//Esse bloco de código permite a adição de um novo campo telefone (input, label e parágrafo de mensagem) sempre que o usuário clicar no botão

add_telefone.addEventListener("click", function() {
    //Esse bloco cria um input para o novo telefone
    let novo_telefone = document.createElement("input");
    novo_telefone.placeholder="(19) 99999-9999";
    novo_telefone.maxLength="17";
    novo_telefone.style.marginTop ="10px";

    //Essa variável contabiliza a quantidade de inputs existentes no campo telefone
    let contador = div_telefone.querySelectorAll("input").length + 1;

    //Esse bloco cria uma label para o novo telefone. Usa a variável contador para que ao criar um telefone novo apareça: "Telefone 2", "Telefone 3", etc
    let nova_label = document.createElement("label");
    nova_label.textContent = "Telefone " + contador + ":";
    nova_label.style.display = "block";

    //Esse bloco cria o botão excluir, para que o usuário possa excluir telefones que foram adicionados
    let excluir = document.createElement("button");
    excluir.textContent ="Excluir";
    excluir.style.marginLeft = "5px";

    //Essa linha cria um novo parágrafo, para que o JS possa enviar mensagens caso o telefone não atenda o formato esperado
    let mensagem_nova = document.createElement("p");

    //Esse bloco adiciona todos os elementos criados anteriormente (label, input, botão excluir e mensagem). Adiciona usando o appendChild
    div_telefone.appendChild(nova_label);
    div_telefone.appendChild(novo_telefone);
    div_telefone.appendChild(excluir);
    div_telefone.appendChild(mensagem_nova);

    //Esse bloco de código válida os telefones adicionados pelo usuário. Essa validação é possível por meio do regex da variável validar_novo. Se o campo telefone estiver errado o JS envia a mensagem de erro "Telefone inválido! Formato: (19) 99999-9999". Essa mensagem já mostra qual é o telefone que está com erro, exemplo: Telefone 2 inválido! Formato: (19) 99999-9999
    botao.addEventListener("click", function() {
    if (novo_telefone.value.trim()===""){
        mensagem_nova.textContent = "";
        return;
    }
    if (!validar_novo.test(novo_telefone.value)){
        mensagem_nova.textContent ="Telefone "+ contador +" inválido! Formato: (19) 99999-9999";
        mensagem_nova.classList.add("erro");
        return;
    }else{
        mensagem_nova.textContent = "";
    }
    })

    //Esse bloco permite a exclusão dos novos telefones adicionados pelo usuário, também envia uma mensagem confirmando se o usuário deseja excluir o telefone
    excluir.addEventListener("click", function(){
        if (confirm("Deseja remover o telefone?")) {
            div_telefone.removeChild(novo_telefone);
            div_telefone.removeChild(nova_label);
            div_telefone.removeChild(excluir);
            div_telefone.removeChild(mensagem_nova);
            alert("Item removido")
        }else{
            alert("Telefone não removido")
        }
    });
});

//----------------------------------------------Campo endereço--------------------------------------

//Esse bloco de código válida o país. Essa validação é possível por meio do regex da variável validar_pais. Se o campo pais estiver errado o JS envia a mensagem de erro "País inválido". Essa validação usa um evento, enquanto o usuário digita o JS valida o campo.

pais.addEventListener("keyup", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (pais.value.trim()===""){
        mensagem_pais.textContent = "";
        return;
    }
    if (!validar_pais.test(pais.value)){
        mensagem_pais.textContent = "País inválido!"
        mensagem_pais.classList.add("erro");
        return;
    }else{
        mensagem_pais.textContent = "";
    }
})

//Esse bloco de código válida o numero. Essa validação é possível por meio do regex da variável validar_numero. Se o campo numero estiver errado o JS envia a mensagem de erro "Nùmero inválido". Essa validação usa um evento, enquanto o usuário digita o JS valida o campo.

numero.addEventListener("keyup", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (numero.value.trim()===""){
        mensagem_numero.textContent = "";
        return;
    }
    if (!validar_numero.test(numero.value)){
        mensagem_numero.textContent = "Número inválido!"
        mensagem_numero.classList.add("erro");
        return;
    }else{
        mensagem_numero.textContent = "";
    }
})

//Esse bloco de código válida o CEP. Essa validação é possível por meio do regex da variável validar_cep. Se o campo cep estiver errado o JS envia a mensagem de erro "Formato de CEP inválido! Exemplo: 00000-000". Essa validação usa um evento, para que sempre que clicar no botão cadastrar o JS valida o CEP.

botao.addEventListener("click", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (cep.value.trim()===""){
        mensagem_cep.textContent = "";
        return;
    }
    if (!validar_cep.test(cep.value)){
        mensagem_cep.textContent = "Formato de CEP inválido! Exemplo: 00000-000"
        mensagem_cep.classList.add("erro");
        return;
    }else{
        mensagem_cep.textContent = "";
    }
})
//----------------------------------------------Campo senha --------------------------------------

//Esse bloco de código válida o campo senha. Essa validação é possível por meio do regex da variável validar_senha. Se o campo senha não estivar atendendo ao regex (pelo menos um número, uma letra maíuscula e uma mínuscula, com no mínimo 8 dígitos) o JS envia a mensagem de erro "Senha inválida! Verifique se ela atende a todos os requisitos acima". Essa validação usa um evento, enquanto o usuário digita o JS valida o campo.

senha.addEventListener("keyup", function() {
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (senha.value.trim()===""){
        mensagem_senha.textContent = "";
        return;
    }

    //Se a senha for menor que 6 mostra a mensagem "Senha fraca"
     if(senha.value.length < 5) {
        validarSenha.textContent = "Senha fraca";
        validarSenha.style.color= "red"
    }
    //Se a senha for maior ou igual a 5 ou menor ou igual a 7 mostra a mensagem "Senha média"
    if(senha.value.length >= 5 && senha.value.length <= 7 ) {
        validarSenha.textContent = "Senha média";
        validarSenha.style.color= "orange"
    }
    //Se a senha for maior ou igual a 8 E atender ao padrão do regex (pelo menos um número, uma letra maíuscula e uma mínuscula, com no mínimo 8 dígitos) mostra a mensagem "Senha forte"
    if(senha.value.length >= 8 && validar_senha.test(senha.value)) {
        validarSenha.textContent = "Senha forte";
        validarSenha.style.color= "green"
    }

    //Se a senha for menor que 8 não mostra nnenhuma mensagem
    if (senha.value.length < 8){
        mensagem_senha.textContent = "";
        return;
    }

    //Esse campo valida se a senha atende ao padrão do regex (pelo menos um número, uma letra maíuscula e uma mínuscula, com no mínimo 8 dígitos). Se a senha não for válida o JS envia a mensagem "Senha inválida! Verifique se ela atende a todos os requisitos acima".
    if (!validar_senha.test(senha.value)){
        mensagem_senha.textContent = "Senha inválida! Verifique se ela atende a todos os requisitos acima";
        mensagem_senha.classList.add("erro");
        return;
    } else{
       mensagem_senha.textContent = ""; 
    }

})

//Esse bloco permite que o usuário visualize ou não a senha, ao clicar no ícone de olho
mostrar_esconder.addEventListener("click", function(){
    if(senha.type === "password") {
        senha.setAttribute('type', 'text');
        mostrar_esconder.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    }else{
        senha.setAttribute('type', 'password');
        mostrar_esconder.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
});

//----------------------------------------------Campo confirmar senha--------------------------------------
//Esse bloco compara a senha do campo anterior com a senha do campo confirmar senha, se forem diferentes o JS envia a mensagem "Sua senha deve ser igual a do campo anterior!"

confirm_senha.addEventListener("keyup", function(){
    //Caso o campo esteja vazio não mostra nenhuma mensagem
    if (senha.value.trim()===""){
        mensagem_senha.textContent = "";
        return;
    }
    //Compara as senhas e se forem igual não mostra nenhuma mensagem
    if (confirm_senha.value === senha.value) {
        mensagem_confirm.textContent=""
    }else{
        //Compara as senhas e se forem diferentes envia uma mensagem
        mensagem_confirm.textContent="Sua senha deve ser igual a do campo anterior!";
        mensagem_confirm.classList.add("erro");
    }
});

//Esse bloco permite que o usuário visualize ou não a senha, ao clicar no ícone de olho
botao_senha.addEventListener("click", function(){
    if(confirm_senha.type === "password") {
        confirm_senha.setAttribute('type', 'text');
        botao_senha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    }else{
        confirm_senha.setAttribute('type', 'password');
        botao_senha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
});

//------------------------- Validação botão enviar -----------------------------------------
// Esse bloco de código está relacionado ao botão cadastrar. Quando o usuário envia os dados o JS faz todas as validações abaixo para verificar se todos os campos estão preenchidos e se todos estão de acordo com as validações aplicadas nos campos acima.

botao.addEventListener("click", function() {
//Se algum desses campos estiverem vazios o JS enviará a mensagem dizendo que esse campo é obrigatório
    if (nome.value.trim() === "") {
        mensagem_nome.textContent=("O campo nome é obrigatório.");
        mensagem_nome.classList.add("erro");
        
    }

    if (telefone.value.trim() === "") {
        mensagem_telefone.textContent=("O campo telefone é obrigatório.");
        mensagem_telefone.classList.add("erro");
      
    }

    if (pais.value.trim() === "") {
        mensagem_pais.textContent=("O campo pais é obrigatório.");
        mensagem_pais.classList.add("erro");
        
    }

    if (estado.value.trim() === "") {
        mensagem_estado.textContent=("O campo estado é obrigatório.");
        mensagem_estado.classList.add("erro");
        
    }

    if (cidade.value.trim() === "") {
        mensagem_cidade.textContent=("O campo cidade é obrigatório.");
        mensagem_cidade.classList.add("erro");
       
    }

    if (rua.value.trim() === "") {
        mensagem_rua.textContent=("O campo rua é obrigatório.");
        mensagem_rua.classList.add("erro");
    }

    if (numero.value.trim() === "") {
        mensagem_numero.textContent=("O campo número é obrigatório.");
        mensagem_numero.classList.add("erro");
    }

    if (bairro.value.trim() === "") {
        mensagem_bairro.textContent=("O campo bairro é obrigatório.");
        mensagem_bairro.classList.add("erro");
    }

    if (cep.value.trim() === "") {
        mensagem_cep.textContent=("O campo CEP é obrigatório.");
        mensagem_cep.classList.add("erro");
    }

    if (senha.value.trim() === "") {
        mensagem_senha.textContent=("O campo senha é obrigatório.");
        mensagem_senha.classList.add("erro");
        
    }

    if (confirm_senha.value.trim() === "") {
        mensagem_confirm.textContent=("O campo confirmar senha é obrigatório.");
        mensagem_confirm.classList.add("erro");
        
    }

    //Esse bloco de código reune todas as validações feitas em todos os campos acima, se todas forem válidas o JS envia a mensagem "Formulário enviado com sucesso!". Se algumas das validações forem inválidas o JS envia a mensagem "Alguns campos não estão preenchidos corretamente. Verifique a senha e se os dados seguem o padrão esperado."

    const camposValidos = 
        confirm_senha.value === senha.value &&
        senha.value.length >= 8 &&
        validar_senha.test(senha.value) &&
        validar_cep.test(cep.value) &&
        validar_numero.test(numero.value) &&
        validar_pais.test(pais.value) &&
        validar_telefone.test(telefone.value) &&
        validar_email.test(email.value) &&
        validar_nome.test(nome.value);


    if (camposValidos) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Alguns campos não estão preenchidos corretamente. Verifique a senha e se os dados seguem o padrão esperado.");
    }
});