###ARRAYS - TOSTRING, CONCAT, UNSHIT E SHIFT
* toString --> ele pega todos os elementos do array, transforma em string e separa por virgula. Parecido com o join(), mas no join podese-se passar o par�metro de separa��o.
* concat --> concatena��o. Mais ou menos o qeue o push() faz, mas o array original fica intacto;
* unshift --> adiciona um item no inicio do array;
* shift --> remove o primeio item do array;
* slice --> Retorna um peda�o do array. Par�metros: indice (inicio), indice (fim) (de onde at� aonde quero pegar) n�o retorna o ultimo indice passado; 
* splice --> modifica o array principal, adicionando e removendo itens.   
       Par�metros: 
          1� indice em que ser� removido ou adicionado (se usar s� ele, ele remove o idice a partir do informado);
          2� n�mero de indices que eu quero remover;
          3� se o segundo parametro for 0, tudo que eu passar ser� adicionado

###FOREACH, EVERY, SOME
* arr.foreach() --> recebe uma function que recebe 3 par�etros
    * item, index e array

    
* arr.every() --> recebe uma fun��o, sempre retorna true e false, basead o no retorno da fun��o que for passada para ele; 
* EXEMPLO: var every = arr.every(function(item) { return item < 5; }); --> O resultado ser� false 
* Usado para testar itens do array, fazer verifica��es, onde se todos os elementos corresponderem a condi��o, retorna true; Testa todos os itens;


* some() --> tamb�m recebe uma fun��o, para comparar apenas alguns elementos. Se pelo menos um dos itens corresponderem a condi��o, ele retorna true.


###MAP, FILTER
* arr.map() --> ele recebe uma fun��o como par�metro. Ele percorre todos os itens do array (assim como o foreach), que retona um array
* PAR�METROS DA FUN��O: item, index e array;
* O map ele vai retornar exatamente o que passar no return;
* Faz uma instru��o com os itens do array;  
* Retorna um novo array, n�o modifica o original;

* arr.filter() --> recebe uma function e os mesmos par�tros, mas filtra o resultado. S� vai trazer os itens que atendem a condi��o;
* O filter vai retornar o item se a express�o dele for verdadeira.