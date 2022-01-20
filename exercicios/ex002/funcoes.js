function highlight(e){
    if(!e.className) e.className = "hilite";
    else e.className += " hilite";
}

function hide(e, reflow) {
    if (reflow) {
        e.style.display = "none";
    } else {
        e.style.visibility =  "hidden";
    }
}

function debug(msg) {

    //var log recebe um elemento pelo seu id. Contudo ele não existe.
    var log = document.getElementById("debuglog");

    //Se ele não existir...
    if (!log) {

        //Cria-se um elemento div
        log = document.createElement("div");

        //Com o id desejado
        log.id = "debuglog";
        
        //Dentro da div, é criado um h1 com o texto "Debug log"
        log.innerHTML = "<h1>Debug log</h1>";

        //Adiciona-o no documento
        document.body.appendChild(log);
    }
    // Cria uma tag pre
    var pre = document.createElement("pre");

    //Coloca a mensagem em um nó
    var text = document.createTextNode(msg);

    //Adiciona a mensagem dentro da tag pre
    pre.appendChild(text);

    //Adiciona o pre no log
    log.appendChild(pre);
}