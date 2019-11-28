###ESCOPO DE FUN��ES


###HOISTING
* Eleva��o. Se existir uma fun��o literal em JS, ainda que criada depois de return, ele a pega e move para cima (isso acontece com todas as fun��es literais);

###IIFE - IMMEDIATELY-INVOCKED FUNCTION EXPRESSION
* Fun��o auto-execut�vel;
* Ao envolver uma fun��o em parenteses, ela se torna uma express�o.
* EXEMPLO:
        (function(){
            return 'teste ';
        })();   

        OU

        (function(){
            return 'teste ';
        }()); 
        ---> Quando o javascript chega nos parenteses que envolvem a fun��o, ao interpret�-la, ao terminar de ler, ele j� executa.

* Qual a vantagem? For�a um escopo local. Quanto menor o escopo, mais f�cil de gerenciar o projeto.