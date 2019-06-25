/**
 * Declarações de variáveis e inicializações
 */
var control = document.querySelector('div.welcome')
//var button = document.querySelector('')

var button = document.querySelector('button').style.display = 'none'
//transition() //função que é chamada sempre que o site é aberto

/**
 * Funções
 */
function transition(){
    control.classList.add('welcome-transition')
    console.log('transition')
}

function showButton(){
    var button = document.querySelector('button').style.display = 'inline'
    console.log('button')
}

/**
 * Eventos
 */

var teste = window.document.querySelector('div.welcome').addEventListener('load', transition)

control.addEventListener('transitionend', showButton)


