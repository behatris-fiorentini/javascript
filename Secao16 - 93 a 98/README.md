###USE STRICT
* "use strict";
* A partir da ES5;
* � uma diretiva que vai dizer para o browser que apartir dali, naquele escopo da fun��o, por isso devemos coloca-la no inicio da fun��o, tudo que estiver dentro da fun��o vai estar dentro do escopo restrito; N�o permite declara��o de v�riavel sem o "var";

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
      console.log(prop31, prop32, prop33); //n�o preciso passar todo o caminho at� o prop3
    }

  * se eu usar o "use strict", n�o pode usar o with


###DELETE
* delete obj.prop  --> se deletar, retorna true;
* S� deleta propriedades do objeto;
* Ao tentar deletr um objeto inteiro, com use strict ele retorna um erro, sem ele, retorna um false e n�o deleta;


###CHAR AT
* charAt(index) --> Diz qual � o caractere no indice que for passado para ele. (tamb�m funciona se eu usar o string[index]);


### split()
* string.split() --> Quebra a string no caractere passado como par�metro e cria um novo array, n�o alterando a string original;

### substring
* string.substring(inicio, fim) --> Faz basicamente o mesmo que o slice. A diferen�a � que se inverter os parametr�s, iniciar com o maior e o segundo ser o menor, pega ao contr�rio.
  

### toLowerCase
* string.toLowerCase() --> Faz com que todas as letras da palabra fiquem em caixa baixa;

### toUpperCase
* string.toUpperCase() --> Faz com que todas as letras da palavra seja min�scula;
