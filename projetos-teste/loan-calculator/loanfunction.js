"use strict"; // Usa o modo restrido do ECMAScript 5 nos navegadores que o suportam

/* 
* Este script define a função calculate() chamada pelas rotinas de tratamento de evento no código HTML acima. A função lê valores de elementos <input>, calcula as informações de pagamento de empréstimo, exibe o resultado em elementos <span>. Também salva os dados do usuário, exibe links financeiras e desenha um gráfico.
*/

function calculate() {
    // Pesquisa os elementos de entrada e saída no documento
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");

    //Obtém a entrada do usuário através dos elementos de entrada. presume que tudo isso é válido
    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 12;
    var payments = parseFloat(years.value) * 12;

    //Agora calcula p valor do pagamento mensal
    var x = Math.pow(1 + interest, payments); // Math.pow calcula potências
    var monthly = (principal*x*interest) / (x-1);

    // Se o resultado é um numero finito, a entrada do usuário estava correta e temos resultados significativos para exibir
    if (isFinite(monthly)) {
        // Preenche os campos de saída, arredondando para 2 casas decimais
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly*payments).toFixed(2);
        totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);

        //Salva a entrada do usuário para que possamos na próxima vez que ele visitar
        save(amount.value, apr.value, years.value, zipcode.value);

        //Anúncio: localiza e exive financeiras locais, mas igonra erros de rede
        try {
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        }
        catch(e) {/*Ignora esses erros*/}

        // Por fim, traça o gráfico do saldo devedor, dos juros e dos pagamentos do capital
        chart(principal, interest, monthly, payments);
    } else {
        // O resultado foi NaN ou infinito, o que significa que a entrada estava imcompleta ou era inválida. Apaga qualquer saída exibida anteriormente.
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest.innerHTML = "";
        chart();
    }
}

//Salva a entrada do usuário como propriedades do objeto localStorage. Essas propriedades ainda existirão quando o usuário visitar no futuro.
//Esse recurso de armazenamento não vai funcionar em alguns navegadores (O firefox, por exemplo), se você executar o exemplo a partir de um arquivo local://URL. Contudo, funciona com http.

function save(amount, apr, years, zipcode) {
    if(window.localStorage) {
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipode;
    }
}

//Tenta restaurar os campos de entrada automaticamente quando o documento é carregado pela primeira vez.
window.onload = function() {
    // Se o navegador suporta localStorage e temos alguns dados armazenados
    if(window.localStorage && localStorage.loan_amount) {
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr;
        document.getElementById("years").value = localStorage.loan_years;
        document.getElementById("zipcode").value = localStorage.loan_zipcode;
    }
};

function getLenders(amount, apr, years, zipcode) {
    if(!window.XMLHttpRequest) return;

    var ad = document.getElementById("lenders");
    if (!ad) return;

    var url = "getLenders.php" + "?amt=" + encodeURIComponent(amount) + "&apr=" + encodeURIComponent(apr) + "&yrs=" + encodeURIComponent(years) + "&zip=" + encodeURIComponent(zipcode);

    //Busca o conteúdo desse URL usando o objeto XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.send(null);

    //Antes de retornar, registra uma função de rotina de tratamento de evento que será chamada em um momento posterior, quando a resposta do servidor de HTTP chegar. Esse tipo de programação assíncrona é muito comum em Javascript do lado do cliente.
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200) {
            //Se chegamos até aqui, obtivemos uma resposta HTTP válida e completa
            var response = req.responseText; // Resposta HTTP como string
            var lenders = JSON.parse(response); // Analisa em um array JS
        
            // Converte o array de objetos lender em uma string HTML
            var list = "";
            for (var i = 0; i < lenders.length; i++) {
                list += "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + "</a>";
            }
            // Exibe o código HTML no elemento acima
            ad.innerHTML = "<ul>" + list + "</ul>";

        }
        
    }
}

// Faz o gráfico do saldo devedor mensal, dos juros e do capital em um elemento <canvas> da HTML.
// Se for chamado sem argumentos, basta apagar qualquer gráfico desenhado anteriormente.
function chart(principal, interest, monthly, payments) {
    var graph = document.getElementById("graph"); //Obtém a marca <canvas>
    graph.width = graph.width; // Mágica para apagar e redefinir o elemento canvas
    //Se chamamos sem argumentos ou se esse navegador não suporta elementos gráficos em um elemento <canvas>, basta retornar agora.
    if(arguments.length == 0 || !graph.getContext) return;

    //Obtém o objeto "contexto" de <canvas> que define a API de desenho
    var g = graph.getContext("2d"); // Todo desenho é feito com esse objeto
    var width = graph.width, height = graph.height; // Obtém o tamanho da tela do desenho
}