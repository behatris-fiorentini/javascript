###REDUCE
* EXEMPLO:
* Reduce: não modifica o array principal e não retorna um array;
* reduz todos os itens do array em um único item;
* Recebe dois parâmetros: uma função e o valo inicial do acumulado;
* percore cada item do array e aplica a epresão em cada item do array;

  var arr = [1, 2, 3, 4, 5];
  var reduce = arr.reduce( function(acumulado, atual, index, array){
    return acumulado + atual;
  }, 0 );

  RESULTADO = 15.

  * esse 0 significa que o valor acumulado inicial é 0;
  * na primeira entrada ele pega o 0, que é o valor acumulado + valor atual que é 1;
  * na segunda entradaele pega o valor acumulado que é 1 vai somar com o valor atual que é o 2;
  * na terceira entrada, ele pega o valor acumulado que é 3 e vai somar com o valor atual que é 3;
  * e assim até terminar o array;
  * Se não for passado esse parâmetro de acumulado incial, o valor acumulado incial vai ser o primeiro ite do array e o valor atual vai ser o segundo item;


###REDUCE RIGHT
* reduceRight() --> Faz o mesmo que o reduce, mas da direita para esquerda (de trás para frente);


###INDEX OF
* indexOf() --> procura se um valor existe no indice do array;
* Se o valor existir, retorna o indice que o valor pesquisado se encontra;
* Se o valor não existir ele retorna '-1';
    var arr = [1, 2, 3, 4, 5];
    indexOf( 3 );
    RESULTADO = 2;
* Parâmetro 1: valor pesquisado;
* Parâmetro 2: indice onde se deve inciar a busca;

###LAST INDEX OF
* lastIndexOf() --> faz o mesmo que o indexOf(), mas procura de trás para frente;

### IS ARRAY
* Array.isArray() --> verifica se um valor passado por parâmetro é um array, retornando true ou false;
* (typeof retorna que o array é um objeto, melhor utilizado para tipos primitivos)
