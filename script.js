const nome = document.querySelector('#nome')
const usuario = document.querySelector('#usuario')
const idade = document.querySelector('#idade')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const confirmSenha = document.querySelector('#confirmSenha')

const msg = document.querySelector('#msg')
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeValue = nome.value
    const usuarioValue = usuario.value
    const idadeValue = idade.value
    const emailValue = email.value
    const senhaValue = senha.value
    const confirmValue = confirmSenha.value

    if (nomeValue === '' ||
        usuarioValue === '' ||
        idadeValue === '' ||
        emailValue === '' ||
        senhaValue === '' ||
        confirmValue === '') {
        msg.innerHTML = 'Por favor preencha todos os campos para se cadastrar!'
        msg.style.display = 'block'
        setTimeout(() => {
            msg.innerHTML = ''
            msg.style.display = ''
        }, 4000)
    } else {
        formulario.submit()
    }
})