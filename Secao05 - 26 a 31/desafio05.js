/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

//Função literal
function getArr(array) {
    return array;
}

//Variável que recebe uma função
// var myFuntion = function(array){ 
//     return array; 
// };

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
getArr(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
 function retArr(arrVal, num){
    return num ? arrVal[num] : arrVal;
 }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrDiferente = ["rosa", 1, true, "1.78", 2019];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retArr(arrDiferente);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
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
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

function apresentacaoLivro(){
    return "O livro livro1 tem " + book('livro1').quantidadePaginas + " páginas!";
}

apresentacaoLivro();

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
function apresentacaoAutor(){
    return "O autor do livro Livro1 é " + book('livro1').autor + ".";
}

apresentacaoAutor();
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

function apresentacaoEditora(){
    return "O livro Livro1 foi publicado pela editora " + book('livro1').editora + ".";
}

apresentacaoEditora();