// abreviação de 'color pencil box' ou 'caixa de lápis de cor'
var cpenbox = ["black", "brown", "yellowgreen", "green", "aquamarine", "blue", "purple", "palevioletred", "pink", "red", "orange", "yellow"];

function flipcard() {
    var rand = Math.floor(Math.random() * 12);
    document.getElementById("c1").style.backgroundColor = cpenbox[rand];
}
function flipcard1() {
    var rand = Math.floor(Math.random() * 12);
    document.getElementById("c2").style.backgroundColor = cpenbox[rand];
}
function flipcard2() {
    var rand = Math.floor(Math.random() * 12);
    document.getElementById("c3").style.backgroundColor = cpenbox[rand]}

//Verificando o id
function myFunction() {
    var x = document.getElementsByClassName("card")[0].id;
    document.getElementById("demo").innerHTML = x;
}