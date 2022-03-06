// abreviação de 'color pencil box' ou 'caixa de lápis de cor'
//Em ordem sequencial, as cores em hexadecimal seguem a mesma ordem do array comentado abaixo.
// var cpenbox = ["black", "brown", "yellowgreen", "green", "aquamarine", "blue", "purple", "palevioletred", "pink", "red", "orange", "yellow"];

// var cpenbox = ["#000000", "#a52a2a", "#9acd32", "#008000", "#7fffd4", "#0000ff", "#800080", "#db7093", "#ffc0cb", "#ff0000", "#ffa500", "#ffff00"];



function flipcard(id) {
        // var rand = Math.floor(Math.random() * 12);
        var hexd = []
        // Alimenta o array hexd
        for (a = 0; a < 6; a++){
            var flop = Math.floor(Math.random() * 16);
            hexd[a] = flop; 
        }

        // Inspeciona cada index do array
        for (b = 0; b < 6; b++) {
            if (hexd[b] > 9) {
                switch(hexd[b]) {
                    case 10:
                        hexd[b] = 'a';
                        break;
                    case 11:
                        hexd[b] = 'b';
                        break;
                    case 12:
                        hexd[b] = 'c';
                        break;
                    case 13:
                        hexd[b] = 'd';
                        break;
                    case 14:
                        hexd[b] = 'e';
                        break;
                    case 15:
                        hexd[b] = 'f';
                        break;
                    default: 
                        hexd[b] = 0;
                }
            }
        }

        //Essa parte precisa ser revisada
        var color1 = hexd[0];
        var color2 = hexd[1];
        var color3 = hexd[2];
        var color4 = hexd[3];
        var color5 = hexd[4];
        var color6 = hexd[5];

        // Concatenando todos os valores para gerar uma variável hexadecimal
        var boxhexcolor = '#' + color1 + color2 + color3 + color4 + color5 + color6;
        console.log(boxhexcolor);

        document.getElementById(id).style.backgroundColor = boxhexcolor;
}