###CONTINUAÇÃO DE REGEX

#Expressões regulares
* Flags --> g: pega todas as ocorrencias | i: ignore case nas ocorrencias;
* [] --> Lista: Quando utilizamos os colchetes, o regex vai corresponder a um dos valores/condições que estiverem dentro dele;
* () --> Grupo/Captura: agrupar itens e capturar textos específicos da expressão regular;
* \w --> Caracteres Alfanuméricos: [A-Za-z0-9_];
* \d --> Digitos: qualquer número [0-9];
* \s --> Espaço em Branco: também pega quebra de linha, tabulação;
* \n --> Quebra de linha;
* \t --> Tabulação;
* .  --> Pega qualquer tipo de caractere, exceto quebra de linha.

##Negação
* ^  --> Utilizado dentro da lista, diz que o match deve ser feito com qualquer item, que não seja o a, b e c. Nega os valores que estão dentro da lista e só pega o que não esta nela (faz o contrario da regex normal);
        * Exemplo: [^abc] -> O match deve ser feito com qualuer item, menos com os da lista a, b ou c;
* \W --> \W maiúsculo: faz o match com qualquer caracter, menos os alfanuméricos;
* \D --> \D maiúsculo: faz o match com qualquer caracter, menos os digitos/números;
* \S --> \S maiúsculo: faz o match com qualquer caracter, menos os espaços em branco;

##Repetidores
* {n,m} --> Intervalo: Item anterior ao menos n vezes, e no máximo m vezes; 
        * Exemplo: /\d{2,4}/ --> pego no mínimo 2 digitos e no máximo 4 caracteres;
* {n} --> item anterior ao intervalo;
        * Exemplo: /\d{3}/ --> pego só os digitos que casem 4 vezes. Se eu tivesse no texto o número "12", "123" e "2345", só pegaria o "123", pois tem 3 digitos ({n}) seguidos.
* ?   --> Opcional: zero ou uma ocorrência do item anterior;
        * Exemplo: /\d\d?/ está dizendo que eu quero dois números seguidos, mas que o segundo, é opcional, indicado pelo ?.
* +   --> Uma ou mais ocorrências do mesmo item anterior; Repete o item 1 ou infinitas vezes
* *   --> 0 ou mais ocorrencias do item anterior;

##EXEMPLOS:
* URL
http://www.google.com.br
hpt://chinelo.
https://google.com
http://www.globo.org

Validação: /https?:\/\/\w+[.\w]+/

