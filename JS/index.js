var formSignin = document.querySelector('#Logar')
var formSignup = document.querySelector('#cadastrar')
var btnColor = document.querySelector('.btncolor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formlogar.style.left = "25px"
    formcadastrar.style.left = "450px"
    btncolor.style.left = "0px"
})

document.querySelector('#btnCadastrar')
  .addEventListener('click', () => {
    formlogar.style.left = "-450px"
    formcadastrar.style.left = "25px"
    btncolor.style.left = "110px"
})