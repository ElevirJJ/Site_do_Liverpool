document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordconfirm = document.getElementById("passwordconfirm");
    const successMessage = document.getElementById("success-message");
    const formTitle = document.getElementById("form-title");
    const redirectButton = document.getElementById("redirect-button");

    if(form){
        form.addEventListener("submit" , (evt)=>{
            evt.preventDefault();
            checkInputs();
        })
    }

    if(username){
        username.addEventListener("blur" , () =>{
            checkInputs();
        })
    }

    if(surname){
        surname.addEventListener("blur", () =>{
            checkInputs();
        })
    }

    if(email){
        email.addEventListener("blur", () =>{
            checkInputs(); 
        })
    }

    if(password){
        password.addEventListener("blur", () =>{
            checkInputs();
        })
    }

    if(passwordconfirm){
        passwordconfirm.addEventListener("blur" , () =>{
            checkInputs();
        })
    }

    // VALIDAÇÃO //
    function checkInputs() {
        const usernameValue = username.value;
        const surnameValue = surname.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        const passwordconfirmValue = passwordconfirm.value;

        // validação do nome
        if (usernameValue === "") {
            erroInput(username, "campo obrigatório");
        } else {
            success(username);
        }

        // validação do sobrenome
        if (surnameValue === "") {
            erroInput(surname, "campo obrigatório");
        } else {
            success(surname);
        }

        // validação do email
        if (emailValue === "") {
            erroInput(email, "campo obrigatório");
        } else if (!checkEmail(emailValue)){
            erroInput(email, "Por favor, insira um email vádio!")
        }else{
            success(email)
        }
            
        

        // validação da senha
        if (passwordValue === "") {
            erroInput(password, "campo obrigatório");
        } else if (passwordValue.length < 7) {
            erroInput(password, "no mínimo 7 caracteres");
        } else {
            success(password);
        }

        // validação da confirmação da senha
        if (passwordconfirmValue === "") {
            erroInput(passwordconfirm, "campo obrigatório");
        } else if (passwordValue !== passwordconfirmValue) {
            erroInput(passwordconfirm, "as senhas não são iguais");
        } else {
            success(passwordconfirm);
        }

        // validação do formulário final
        const formControls = form.querySelectorAll(".form-control");

        const formValid = [...formControls].every((formControl) => {
            return formControl.className === "form-control success";
        });

        if (formValid) {
            alert("O usuário " + usernameValue  + " foi cadastrado")
            form.style.display = "none";
            formTitle.style.display = "none";
            successMessage.style.display = "block";
            redirectButton.style.display = "block";
        }
    }

    // Funções dos Inputs
    function erroInput(input, mensagem) {
        const formControl = input.parentElement;
        const mensagemErro = formControl.querySelector("small");

        mensagemErro.innerText = mensagem;

        formControl.className = "form-control erro";
    }

    function success(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    // Função de redirecionamento do sucesso
    window.volta = function volta() {
        window.location.href = "index.html";
    }
});

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

