/*
Crie um array com 5 items (tipos variados).
*/
 var arr = ["batata", 2.5, function teste() {return 'teste'; }, true, ['arroz', "feij�o"]];

/*
Crie uma fun��o chamada `addItem`, que ir� adicionar itens no array criado.
A fun��o dever� retornar o array atualizado.
*/
 function addItem(item, arr){
     arr.push(item);
     return arr;
 }

/*
Adicione um novo array ao array criado no in�cio do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

arr.push([1, 2, 3]);
console.log(arr);

/*
Mostre no console o segundo elemento desse �ltimo array, criado acima, com a
frase:
"O segundo elemento do segundo array � [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array � " + arr[6][1] + ".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + arr[6].length + " itens.");

/*
Utilizando a estrutura de repeti��o `while`, mostre no console todos os n�meros
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'N�meros pares entre 10 e 20:' );

var count = 0;
while(count <= 20){
    count % 2 === 0 ? console.log(count) : "";
    count++;
}

/*
Na mesma ideia do exerc�cio acima: mostre agora os n�meros �mpares.
*/
console.log( 'N�meros �mpares entre 10 e 20:' );

var count = 0;
while(count <= 20){
    count % 2 === 1 ? console.log(count) : "";
    count++;
}

/*
Repita os mesmos exerc�cios feitos acima, mas agora usando o loop "for".
S� vamos mudar o range:
- No primeiro "for", mostre os n�meros pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os n�meros �mpares entre 111 e 125, inclusive eles.
*/
console.log( 'N�meros pares entre 100 e 120:' );
for( var i = 100; i <= 120; i++ ){
    i % 2 === 0 ? console.log(i) : "";
}

console.log( 'N�meros �mpares entre 111 e 125:' );
for( var i = 111; i <= 125; i++ ){
    i % 2 === 1  ? console.log(i) : "";
}