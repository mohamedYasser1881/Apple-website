let img = document.querySelector('.img');
let container = document.querySelector('.container');

function phones(src) {
    var mainImg = document.querySelector('.img img');
    mainImg.src = src;
}

function colors(color) {
    container.style.background = color;
}