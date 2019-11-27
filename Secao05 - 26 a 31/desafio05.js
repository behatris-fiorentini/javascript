/*
Crie uma vari�vel qualquer, que receba um array com alguns valores aleat�rios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma fun��o que receba um array como par�metro, e retorne esse array.
*/

//Fun��o literal
function getArr(array) {
    return array;
}

//Vari�vel que recebe uma fun��o
// var myFuntion = function(array){ 
//     return array; 
// };

/*
Imprima o segundo �ndice do array retornado pela fun��o criada acima.
*/
getArr(arr)[1];

/*
Crie uma fun��o que receba dois par�metros: o primeiro, um array de valores; e o
segundo, um n�mero. A fun��o deve retornar o valor de um �ndice do array que foi passado
no primeiro par�metro. O �ndice usado para retornar o valor, deve ser o n�mero passado no
segundo par�metro.
*/
 function retArr(arrVal, num){
    return num ? arrVal[num] : arrVal;
 }

/*
Declare uma vari�vel que recebe um array com 5 valores, de tipos diferentes.
*/
var arrDiferente = ["rosa", 1, true, "1.78", 2019];

/*
Invoque a fun��o criada acima, fazendo-a retornar todos os valores do �ltimo
array criado.
*/
retArr(arrDiferente);

/*
Crie uma fun��o chamada `book`, que recebe um par�metro, que ser� o nome do
livro. Dentro dessa fun��o, declare uma vari�vel que recebe um objeto com as
seguintes caracter�sticas:
- esse objeto ir� receber 3 propriedades, que ser�o nomes de livros;
- cada uma dessas propriedades ser� um novo objeto, que ter� outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de p�ginas)
    - `autor` - String
    - `editora` - String
- A fun��o deve retornar o objeto referente ao livro passado por par�metro.
- Se o par�metro n�o for passado, a fun��o deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro){
    var objeto = {
        livro1: { quantidadePaginas: 356, autor: "Autor 01", editora: "Editora 01" },
        'livro 2': { quantidadePaginas: 258, autor: "Autor 02", editora: "Editora 02" },
        livro3: { quantidadePaginas: 159, autor: "Autor 03", editora: "Editora 03" }
    };

        var retorno = nomeLivro ? objeto[nomeLivro] : objeto;

    return retorno;
}

/*
Usando a fun��o criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a fun��o acima, imprima a quantidade de p�ginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] p�ginas!"
*/

function apresentacaoLivro(){
    return "O livro livro1 tem " + book('livro1').quantidadePaginas + " p�ginas!";
}

apresentacaoLivro();

/*
Ainda com a fun��o acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] � [AUTOR]."
*/
function apresentacaoAutor(){
    return "O autor do livro Livro1 � " + book('livro1').autor + ".";
}

apresentacaoAutor();
/*
Ainda com a fun��o acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

function apresentacaoEditora(){
    return "O livro Livro1 foi publicado pela editora " + book('livro1').editora + ".";
}

apresentacaoEditora();