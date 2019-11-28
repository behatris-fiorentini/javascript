###WRAPPER OBJECTS
* Valores primitivos não são objetos (Number, String, Boolean, null, undefined ...). Eles são valores exatamente como são apresentados;
* Se tiver propriedades e métodos = é um objeto;
  
* OBJETOS CONSTRUTORES:
  * Construtores, são objetos ou funções, que criam novos objetos;
  * Para utilizar contrutores em JS, utiliza-se a palavra "new";
  
* EXEMPLO: var name = new String("Bia");
  * Quando se cria um contrutor, ele é um objeto, que pussui funções e métodos;
  * Quando utilizado o new, como no exemplo, ele nunca será uma string literal, sempre será um objeto;
  
  * Wrapper: pega a string literal e "envolve" em um objeto, par que eu possa utilizar determinadas propriedades;
  * Sem o "new" serve para conversão:
    * var name = String(30);
    * var age = Number('150');
    * var variavel = Boolean(0);


###TYPEOF
* Testar tipo de valores;
