//random gera um numero de 0 a 1, ex: 0.5
//floor arrednda para baixo
// *5 vai gerar um numero ate 5.99 


var num = Math.floor(Math.random() *5);
var imagens = [
    'img/foto1.jpg',
    'img/foto2.jpg',
    'img/foto3.jpg',
    'img/foto4.jpg',
    'img/foto5.png',
];

var visualizar = imagens[num];
document.write('<h1> === APERTE F5 === </h1>');
document.write(`<img src="${visualizar}">`)