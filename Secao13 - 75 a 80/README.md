###ARRAYS - TOSTRING, CONCAT, UNSHIT E SHIFT
* toString --> ele pega todos os elementos do array, transforma em string e separa por virgula. Parecido com o join(), mas no join podese-se passar o parâmetro de separação.
* concat --> concatenação. Mais ou menos o qeue o push() faz, mas o array original fica intacto;
* unshift --> adiciona um item no inicio do array;
* shift --> remove o primeio item do array;
* slice --> Retorna um pedaço do array. Parâmetros: indice (inicio), indice (fim) (de onde até aonde quero pegar) não retorna o ultimo indice passado; 
* splice --> modifica o array principal, adicionando e removendo itens.   
       Parâmetros: 
          1º indice em que será removido ou adicionado (se usar só ele, ele remove o idice a partir do informado);
          2º número de indices que eu quero remover;
          3º se o segundo parametro for 0, tudo que eu passar será adicionado

###FOREACH, EVERY, SOME
* arr.foreach() --> recebe uma function que recebe 3 parâetros
    * item, index e array

    
* arr.every() --> recebe uma função, sempre retorna true e false, basead o no retorno da função que for passada para ele; 
* EXEMPLO: var every = arr.every(function(item) { return item < 5; }); --> O resultado será false 
* Usado para testar itens do array, fazer verificações, onde se todos os elementos corresponderem a condição, retorna true; Testa todos os itens;


* some() --> também recebe uma função, para comparar apenas alguns elementos. Se pelo menos um dos itens corresponderem a condição, ele retorna true.


###MAP, FILTER
* arr.map() --> ele recebe uma função como parâmetro. Ele percorre todos os itens do array (assim como o foreach), que retona um array
* PARÂMETROS DA FUNÇÃO: item, index e array;
* O map ele vai retornar exatamente o que passar no return;
* Faz uma instrução com os itens do array;  
* Retorna um novo array, não modifica o original;

* arr.filter() --> recebe uma function e os mesmos parâtros, mas filtra o resultado. Só vai trazer os itens que atendem a condição;
* O filter vai retornar o item se a expressão dele for verdadeira.