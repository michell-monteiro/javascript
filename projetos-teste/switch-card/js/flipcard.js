// abreviação de 'color pencil box' ou 'caixa de lápis de cor'
//Em ordem sequencial, as cores em hexadecimal seguem a mesma ordem do array comentado abaixo.
// var cpenbox = ["black", "brown", "yellowgreen", "green", "aquamarine", "blue", "purple", "palevioletred", "pink", "red", "orange", "yellow"];

var cpenbox = ["#000000", "#a52a2a", "#9acd32", "#008000", "#7fffd4", "#0000ff", "#800080", "#db7093", "#ffc0cb", "#ff0000", "#ffa500", "#ffff00"];

function flipcard(id) {
    var rand = Math.floor(Math.random() * 12);
    document.getElementById(id).style.backgroundColor = cpenbox[rand];
}