###WRAPPER OBJECTS
* Valores primitivos n�o s�o objetos (Number, String, Boolean, null, undefined ...). Eles s�o valores exatamente como s�o apresentados;
* Se tiver propriedades e m�todos = � um objeto;
  
* OBJETOS CONSTRUTORES:
  * Construtores, s�o objetos ou fun��es, que criam novos objetos;
  * Para utilizar contrutores em JS, utiliza-se a palavra "new";
  
* EXEMPLO: var name = new String("Bia");
  * Quando se cria um contrutor, ele � um objeto, que pussui fun��es e m�todos;
  * Quando utilizado o new, como no exemplo, ele nunca ser� uma string literal, sempre ser� um objeto;
  
  * Wrapper: pega a string literal e "envolve" em um objeto, par que eu possa utilizar determinadas propriedades;
  * Sem o "new" serve para convers�o:
    * var name = String(30);
    * var age = Number('150');
    * var variavel = Boolean(0);


###TYPEOF
* Testar tipo de valores;
