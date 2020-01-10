###REGEX - EXPRESSÕES REGULARES
* Tipo primitivo;
* Utilizamos duas barras com a expressão dentro;
* https://regex101.com/
* Flags: 
  * g --> geral (apica em todas as ocorrências)
  * i --> o i é o ignore case
  

* texto.match() --> faz a busca no texto ustilizando uma expressão regular

* \w --> caracteres alfanuméricos e _
* \d --> números
* | --> ou


###Classe de caracteres
* [] --> representa a classe de caracteres (lista)
* representa um unico caractere
* ex.: /[0-9]/    /[A-Z]/
  

* () --> agrupamento de caracteres, Cria-se um grupo de captura
* /(1)(2)/ ---> $1 representa a o 1 e $2 representa o 2
* & pega o 1 e o 2 no caso acima (exemplo texto.replace(/(1)(2)/, $&)) pega todos os itens da captura (que estivere entre parênteses)
