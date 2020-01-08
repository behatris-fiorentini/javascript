(function(){
/*
1. Envolva todo o conte�do desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script � ele.
*/
  'use strict';

/*
Declare uma vari�vel chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] � a [POSI��O]� letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F � a 1� letra do meu nome."
- "e � a 2� letra do meu nome."
E assim por diante, at� a �ltima.
*/
console.log( 'As letras do seu nome:' );
  var name = 'Behatris';

  for(var i = 0; i < name.length; i++){
    console.log(name[i] + ' � a ' + (i + 1) + '� letra do meu nome.');
  }

/*
- Declare uma vari�vel chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um tra�o).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Fa�a a primeira letra de cada nome ficar em caixa alta, e troque o tra�o
por um espa�o.
- Detalhe: o c�digo que voc� escrever abaixo deve funcionar para qualquer
nome, ent�o fique � vontade para usar as artimanhas que j� viu at� agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/
console.log( '\nNome convertido � partir de um slug:' );
var fullName = 'behatris-fiorentini';
var newFullName = fullName.split('-').map(function(name){
  return name[0].toUpperCase() + name.slice(1);
});

console.log(newFullName.join(' '));
/*
- Crie um array com 5 nomes. Reduza esses nomes a uma �nica string, separando
cada nome por v�rgula. Entre o pen�ltimo e o �ltimo nome, o separador deve
ser um "e". No final, concatene com a frase: " s�o meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "Jo�o, Maria, Roberto, Pedro e Marcos s�o meus amigos."
- Detalhe: o c�digo abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugest�o ;)
*/
console.log( '\nMeus amigos:' );
var friends = ['Davi', 'Ot�vio', 'Maria', 'Rafaella', 'Kaio'];
var frase = friends.reduce(function(acumulada, atual, index){
  var ligacao = friends.length - 1 === index ? ' e ' : ', ';
  return acumulada + ligacao + atual;
}). concat(' s�o meus amigos.');

console.log(frase);

/*
Usando o replace(), fa�a a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/
console.log( '\nEra "Roberto", agora �:' );
console.log('Roberto'.replace('to', 'ta'));

/*
Mostre no console a parte "nando" da string "Fernando". Use o m�todo que
faz a busca do final para o in�cio da string.
*/
console.log( '\nParte de uma string:' );
console.log('Fernando'.substring(8, 3));
console.log('Fernando'.slice('Fernando'.lastIndexOf('nando')));

/*
Declare uma vari�vel chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre mai�sculas
e min�sculas.
- Detalhe: o c�digo abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/
console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
// ?

})();