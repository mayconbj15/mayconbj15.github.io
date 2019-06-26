/**
 * Declarações de variáveis globais e inicializações
 */

var control = document.querySelector('div.welcome')

var button = document.querySelector('button').style.display = 'none'

/**
 * Funções
 */

function transition(){
    control.classList.add('welcome-transition')
}

function showButton(){
    var button = document.querySelector('button').style.display = 'inline'

}

function showHeader(){
    header.style.display = 'inline-block'
    header.style.textAlign = 'center'
}

/**
 * Eventos
 */

window.addEventListener('load', transition)


/**
 * Main
 */

