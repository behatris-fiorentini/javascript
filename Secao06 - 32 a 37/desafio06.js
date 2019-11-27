/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para come�ar o desafio.
Declare uma vari�vel chamada `championship` que receber� o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Brasileiro";
console.log(championship);

/*
Declare uma vari�vel chamada `teams`, que receber� um array com 5 elementos.
Os elementos ser�o nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solu��o desse
desafio.
*/
var teams = ["Flamengo", "Santos", "Palmeiras", "Gr�mio", "Athetico-PR"];
console.log( 'Times que est�o participando do campeonato:', teams );

/*
Crie uma fun��o chamada `showTeamPosition` com as seguintes caracter�sticas:
    - A fun��o deve receber um n�mero por par�metro;
    - A fun��o deve retornar a frase:
    "O time que est� em [POSI��O]� lugar � o [NOME DO TIME].";
    - Onde [POSI��O] � o valor passado por par�metro e [NOME DO TIME] � o time
    que est� nessa posi��o no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays come�am no �ndice zero, ent�o a posi��o passada
    deve ser sempre um n�mero a mais que o �ndice do array ;)
    --------------
    - A fun��o s� deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se n�o houver time para a posi��o passada, deve retornar a mensagem:
    "N�o temos a informa��o do time que est� nessa posi��o."
*/

function showTeamPosition(params) {
     return (params < 6) ? ("O time que est� em "+ (params) +"� lugar � o " + teams[params-1] + ".") :
     ("N�o temos a informa��o do time que est� nessa posi��o.");
}

/*
Escolha 4 times do campeonato selecionado e mostre a posi��o dele, usando a
fun��o acima. Entre esses 4, adicione 1 que n�o esteja entre os 5 primeiros.
*/
showTeamPosition(1);
showTeamPosition(2);
showTeamPosition(3);
showTeamPosition(6);


/*
Mostre os n�meros de 20 a 30 no console (inclusive o 30), usando a estrutura de
repeti��o "while".
*/
var count = 19;

while(++count <= 30){
    console.log(count);
}

/*
Crie uma fun��o chamada `convertToHex`, com as seguintes caracter�sticas:
    - A fun��o recebe uma cor por par�metro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que ser�o convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por par�metro �
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] � [HEXADECIMAL].";
    - Se a cor passada por par�metro n�o estiver entre as selecionadas, mostre
    a frase:
    "N�o temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
    switch(cor){
        case 'red':
        console.log('O hexadecimal para a cor ' + cor + ' � #FF0000.');
        break;

        case 'green':
        console.log('O hexadecimal para a cor ' + cor + ' � #008000.');
        break;

        case 'pink':
        console.log('O hexadecimal para a cor ' + cor + ' � #FFC0CB.');
        break;

        case 'black':
        console.log('O hexadecimal para a cor ' + cor + ' � #000000.');
        break;

        case 'purple':
        console.log('O hexadecimal para a cor ' + cor + ' � #A020F0.');
        break;

        default:
        console.log('N�o temos hexadecimal par a cor ' + cor + '.');
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a fun��o criada acima.
*/
convertToHex('red'); //O hexadecimal para a cor red � #FF0000.
convertToHex('green'); //O hexadecimal para a cor green � #008000.
convertToHex('pink'); //O hexadecimal para a cor pink � #FFC0CB.
convertToHex('black'); //O hexadecimal para a cor black � #000000.
convertToHex('purple'); //O hexadecimal para a cor � #A020F0.
convertToHex('yellow'); //N�o temos hexadecimal par a cor yellow.
convertToHex('white'); //N�o temos hexadecimal par a cor white.
convertToHex('gray'); //N�o temos hexadecimal par a cor gray.

//RESPOSTA: Todas as cores que n�o existe no case, caem no default
