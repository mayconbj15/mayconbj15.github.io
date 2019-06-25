var teste = window.document.querySelector('div.welcome').addEventListener("load", showButton)


var control = document.querySelector('div.welcome')
//var button = document.querySelector('')

var button = document.querySelector('button').style.display = 'none'
//transition() //função que é chamada sempre que o site é aberto

function transition(){
    control.classList.add('welcome-transition')
}

function showButton(){
    var button = document.querySelector('button').style.display = 'inline'
    console.log('button')
}

control.addEventListener('transitionend', showButton)



