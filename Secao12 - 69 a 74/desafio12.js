(function(){
/*
Envolva todo o conte�do desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
  name: 'Braselino',
  lastname: 'Oliveira',
  age: 60
};

console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
N�o use nenhuma estrutura de repeti��o, nem crie o array manualmente.
*/
console.log( Object.keys( person )  );

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que ser�o 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push( {name: 'As Cr�nicas de Narnia', pages: 387} );
books.push( {name: 'Pequeno Pr�ncipe', pages: 289} );
books.push( {name: 'A Garota da Capa Vermelha', pages: 236} );

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log( books );

console.log( '\nLivro que est� sendo removido:' );

/*
Remova o �ltimo livro, e mostre-o no console.
*/
var livroRemovido = books.pop();
console.log( livroRemovido );

console.log( '\nAgora sobraram somente os livros:' );

/*
Mostre no console os livros restantes.
*/
console.log( books );

/*
Converta os objetos que ficaram em `books` para strings.
*/

books = JSON.stringify( books );

console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log( books );

/*
Converta os livros novamente para objeto.
*/
console.log( '\nAgora os livros s�o objetos novamente:' );
books = JSON.parse( books );
console.log( books );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0; i < books.length; i++){
  for( var prop in books[i] ){
    console.log( prop + ': ' + books[i][prop] );
  }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
console.log( '\nMeu nome �:' );

var myName = ['B', 'E', 'H', 'A', 'T', 'R', 'I', 'S'];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( myName.join('') );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido �:' );
console.log( myName.reverse() );


/*
Mostre todos os itens do array acima, odenados alfab�ticamente.
*/
console.log( '\nAgora em ordem alfab�tica:' );
console.log( myName.sort() ); 

})();