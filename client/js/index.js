var campos = [ //criou-se uma variável "campos" para percorrer todos os campos do formulário
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

// console.log(campos);

var tbody = document.querySelector('table tbody'); //criou a variável tbody para receber uma tabela tbody

document.querySelector('.form').addEventListener('submit', function (event) { //criou-se uma função de montar a tabela ao acessar o form no html, clicando em "incluir" vai fazer o submit em todo o formulário 

    event.preventDefault(); //o event.preventDefault() é um método para tornar a página padrão a cada vez que for incluída uma nova linha na tabela, ou seja, ao incluir qualquer linha, a página não recarregará com o padrão dela sendo sem nenhuma linha incluida.

    var tr = document.createElement('tr'); //criou-se a variável tr para a inclusão das linhas na tabela

    campos.forEach(function (campo) { //o forEach, vai percorrer todo o array campos

        var td = document.createElement('td'); //criou-se a variável td para a inclusão das células nas linhas da tabela
        td.textContent = campo.value; //e cada célula vai receber o valor do campo e incluir como texto na mesma
        tr.appendChild(td); //cada célula(td) vai ser adicionada(appendChild) na linha(tr)
    });

    var tdVolume = document.createElement('td'); //criou-se a variável tdVolume para receber uma cálula
    tdVolume.textContent = campos[1].value * campos[2].value; //uma célula do cálculo dos valores do campos[1](quantidade) * campos[2](valor) em formato de texto 

    tr.appendChild(tdVolume); //e essa célula será adicionada na linha(tr) da tabela

    tbody.appendChild(tr); //a tabela da variável tbody vai ter uma linha(tr) inclusa no final de todo esse evento 

    campos[0].value = ''; //o campo 0 vai ser modificado para ' ';
    campos[1].value = 1; //o campo 0 vai ser modificado para 1;
    campos[2].value = 0; //o campo 0 vai ser modificado para 0;

    campos[0].focus()

});
