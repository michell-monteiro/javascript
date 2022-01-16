// abreviação de 'color pencil box' ou 'caixa de lápis de cor'
var cpenbox = ["black", "brown", "yellowgreen", "green", "aquamarine", "blue", "purple", "palevioletred", "pink", "red", "orange", "yellow"];

function flipcard(id) {
    var rand = Math.floor(Math.random() * 12);
    document.getElementById(id).style.backgroundColor = cpenbox[rand];
}