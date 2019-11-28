###ESCOPO DE FUNÇÕES


###HOISTING
* Elevação. Se existir uma função literal em JS, ainda que criada depois de return, ele a pega e move para cima (isso acontece com todas as funções literais);

###IIFE - IMMEDIATELY-INVOCKED FUNCTION EXPRESSION
* Função auto-executável;
* Ao envolver uma função em parenteses, ela se torna uma expressão.
* EXEMPLO:
        (function(){
            return 'teste ';
        })();   

        OU

        (function(){
            return 'teste ';
        }()); 
        ---> Quando o javascript chega nos parenteses que envolvem a função, ao interpretá-la, ao terminar de ler, ele já executa.

* Qual a vantagem? Força um escopo local. Quanto menor o escopo, mais fácil de gerenciar o projeto.