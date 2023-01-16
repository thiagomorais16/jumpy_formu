const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const cpf = document.getElementById('cpf')
const password = document.getElementById('password')

form.addEventListener ('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const telValue = tel.value
    const cpfValue = cpf.value
    const passwordValue = password.value

    if(username === ''){
        errorValidation(username, 'Preencha esse dado')
    }else{
        successValidation(username)
    }
    if(telValue ===''){
    errorValidation(tel,'Preencha esse dado')
    }else{
    successValidation(tel)
    }
    if (cpfValue === '') {
        errorValidation(cpf, 'Preencha esse dado')
    } else if (cpfValue.length < 11) {
        errorValidation(cpf, 'O cpf precisa ter + de 11 caracteres')
    } else {
        successValidation(cpf)
    }
    if (passwordValue === '') {
        errorValidation(password, 'Preencha esse dado')
    } else if (passwordValue.length < 8) {
        errorValidation(password, 'A senha deve ter + de 8 caracteres')
    } else {
        successValidation(email)
    }

}

function errorValidation(input, message){
    const formControl = input.parentElement;
    
}

function successValidation (input) {
    const formControl = input.parentElement ; 

    innerText = message

  alert ("Sucesso")
}

