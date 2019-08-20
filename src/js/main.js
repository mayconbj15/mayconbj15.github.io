/**
 * Script de animação do header
 */

 var imagens = document.querySelectorAll('header img')
 

 imagens.forEach(function(element) {
     element.addEventListener('mouseenter', () => {maxHeight(element)})
 });


 imagens.forEach(function(element) {
     element.addEventListener('mouseout', () => {minHeight(element)})
 });


 function maxHeight(element){
    console.log('max')
    element.height += 5;
    
 }

 function minHeight(element){
    console.log('min')
    element.height -= 5;
 }