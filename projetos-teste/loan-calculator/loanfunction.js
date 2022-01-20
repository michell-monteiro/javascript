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
    }
}

