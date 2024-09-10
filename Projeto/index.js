const form = document.getElementById('form')
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senhaconfima = document.getElementById('senhaconfima')

// mapeamneto para as animaçãoes de redirecionamento
const container = document.querySelector('.container')
const mensagem = document.querySelector('.messagem')

if(form){
    form.addEventListener("submit", (evt) => {
        evt.preventDefault()

        if(checandoInputs()){
            const usuario = nome.value
            container.style.display = 'none'
            mensagem.style.display = 'block'
            alert("Usuário " + usuario + " Foi cadastrado com sucesso!")
        }else{
            alert("Preencha o campo com seus dados!")
        }
    })
}

// validações de todos os inputs
function checandoInputs() {
    const nomeValor = nome.value
    const sobrenomeValor = sobrenome.value
    const emailValor = email.value
    const senhaValor = senha.value
    const senhaconfimaValor = senhaconfima.value

    let formularioValidacao = true

    if (nomeValor === "") {
        erro(nome, "Campo obrigátorio")
        formularioValidacao = false
    } else {
        sucesso(nome)
    }

    if (sobrenomeValor === "") {
        erro(sobrenome, "Campo obrigatório")
        formularioValidacao = false
    } else {
        sucesso(sobrenome)
    }

    if (emailValor === "") {
        erro(email, "Campo obrigatório")
        formularioValidacao = false
    } else if (!checkEmail(emailValor)) {
        erro(email, "Por favor, insira um email válido")
        formularioValidacao = false
    } else {
        sucesso(email)
    }

    if (senhaValor === "") {
        erro(senha, "Campo obrigatório")
        formularioValidacao = false
    } else if (senhaValor.length < 6) {
        erro(senha, "No minimo 6 caracteres!")
        formularioValidacao = false
    } else {
        sucesso(senha)
    }

    if (senhaconfimaValor === "") {
        erro(senhaconfima, "Campo obrigatório")
        formularioValidacao = false
    } else if (senhaconfimaValor !== senhaValor) {
        erro(senhaconfima, "As senhas não são iguais!")
        formularioValidacao = false
    } else {
        sucesso(senhaconfima)
    }

    return formularioValidacao
}


// redirecionamento para o HOME
let button = document.getElementById('button');

if(button){
    button.onclick = () => {
         window.location.href = "index.html"
    }
}






// funçoes de validaçãoes dos inputs
function erro(input, mensagem) {
    const formcontrol = input.parentElement
    const small = formcontrol.querySelector('small')

    formcontrol.className = "form-control erro"

    small.innerHTML = mensagem
}

function sucesso(input) {
    const formcontrol = input.parentElement

    formcontrol.className = "form-control sucesso"
}



function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}












