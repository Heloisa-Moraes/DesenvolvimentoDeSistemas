var imagens = [
    'img/foto1.jpg',
    'img/foto2.jpg',
    'img/foto3.jpg',
    'img/foto4.jpg',
    'img/foto5.png',
];

var animais = document.getElementById("animais");
 i = 0;
setInterval(() => {
   
    animais.src = imagens [i];
    i++;
    if(i ==5)
    i=0;
},1000);