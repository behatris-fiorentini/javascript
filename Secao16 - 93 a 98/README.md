###USE STRICT
* "use strict";
* A partir da ES5;
* é uma diretiva que vai dizer para o browser que apartir dali, naquele escopo da função, por isso devemos coloca-la no inicio da função, tudo que estiver dentro da função vai estar dentro do escopo restrito; Não permite declaração de váriavel sem o "var";

###with
* with --> serve para diminuir o tamanho do objeto;
    var obj = {
      prop1: {
        prop2: {
          prop3: {
            prop31: 'prop31';
            prop32: 'prop32';
            prop33: 'prop33';
          }
        }
      }
    };

    with(obj.prop1.prop2.prop3){
      console.log(prop31, prop32, prop33); //não preciso passar todo o caminho até o prop3
    }

  * se eu usar o "use strict", não pode usar o with


###DELETE
* delete obj.prop  --> se deletar, retorna true;
* Só deleta propriedades do objeto;
* Ao tentar deletr um objeto inteiro, com use strict ele retorna um erro, sem ele, retorna um false e não deleta;


###CHAR AT
* charAt(index) --> Diz qual é o caractere no indice que for passado para ele. (também funciona se eu usar o string[index]);


### split()
* string.split() --> Quebra a string no caractere passado como parâmetro e cria um novo array, não alterando a string original;

### substring
* string.substring(inicio, fim) --> Faz basicamente o mesmo que o slice. A diferença é que se inverter os parametrôs, iniciar com o maior e o segundo ser o menor, pega ao contrário.
  

### toLowerCase
* string.toLowerCase() --> Faz com que todas as letras da palabra fiquem em caixa baixa;

### toUpperCase
* string.toUpperCase() --> Faz com que todas as letras da palavra seja minúscula;
