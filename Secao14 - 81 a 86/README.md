###REDUCE
* EXEMPLO:
* Reduce: n�o modifica o array principal e n�o retorna um array;
* reduz todos os itens do array em um �nico item;
* Recebe dois par�metros: uma fun��o e o valo inicial do acumulado;
* percore cada item do array e aplica a epres�o em cada item do array;

  var arr = [1, 2, 3, 4, 5];
  var reduce = arr.reduce( function(acumulado, atual, index, array){
    return acumulado + atual;
  }, 0 );

  RESULTADO = 15.

  * esse 0 significa que o valor acumulado inicial � 0;
  * na primeira entrada ele pega o 0, que � o valor acumulado + valor atual que � 1;
  * na segunda entradaele pega o valor acumulado que � 1 vai somar com o valor atual que � o 2;
  * na terceira entrada, ele pega o valor acumulado que � 3 e vai somar com o valor atual que � 3;
  * e assim at� terminar o array;
  * Se n�o for passado esse par�metro de acumulado incial, o valor acumulado incial vai ser o primeiro ite do array e o valor atual vai ser o segundo item;


###REDUCE RIGHT
* reduceRight() --> Faz o mesmo que o reduce, mas da direita para esquerda (de tr�s para frente);


###INDEX OF
* indexOf() --> procura se um valor existe no indice do array;
* Se o valor existir, retorna o indice que o valor pesquisado se encontra;
* Se o valor n�o existir ele retorna '-1';
    var arr = [1, 2, 3, 4, 5];
    indexOf( 3 );
    RESULTADO = 2;
* Par�metro 1: valor pesquisado;
* Par�metro 2: indice onde se deve inciar a busca;

###LAST INDEX OF
* lastIndexOf() --> faz o mesmo que o indexOf(), mas procura de tr�s para frente;

### IS ARRAY
* Array.isArray() --> verifica se um valor passado por par�metro � um array, retornando true ou false;
* (typeof retorna que o array � um objeto, melhor utilizado para tipos primitivos)
