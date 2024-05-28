var formlogar = document.querySelector('#logar')
var formcadrastar = document.querySelector('#cadrastar')
var btncolor = document.querySelector('.btncolor')

document.querySelector('#btnlogar')
  .addEventListener('click', () => {
    formlogar.style.left = "25px"   
    formcadrastar.style.left = "450px"
    btncolor.style.left = "0px"
})

document.querySelector('#btncadrastar')
  .addEventListener('click', () => {
    formlogar.style.left = "-450px"
    formcadrastar.style.left = "25px"
    btncolor.style.left = "110px"
})

