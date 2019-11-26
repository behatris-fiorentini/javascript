// Crie uma fun��o que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
    return x + y;
}

// Declare uma vari�vel que receba a invoca��o da fun��o criada acima, passando dois n�meros quaisquer por argumento, e somando `5` ao resultado retornado da fun��o.
var valor = soma(5, 3) + 5;

// Qual o valor atualizado dessa vari�vel?
// RESPOSTA: O resultado da soma dos dois par�metros passados mais 5, 13;

// Declare uma nova vari�vel, sem valor.
var aux;

/*
Crie uma fun��o que adicione um valor � vari�vel criada acima, e retorne a string:
    O valor da vari�vel agora � VALOR.
Onde VALOR � o novo valor da vari�vel.
*/
function funcao(){
    aux = 50;
    return "O valor da vari�vel agora � " + aux;
}

// Invoque a fun��o criada acima.
funcao();

// Qual o retorno da fun��o? (Use coment�rios de bloco).
/**RESPOSTA:  O valor da vari�vel agora � 50;*/

/*
Crie uma fun��o com as seguintes caracter�sticas:
1. A fun��o deve receber 3 argumentos;
2. Se qualquer um dos tr�s argumentos n�o estiverem preenchidos, a fun��o deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da fun��o deve ser a multiplica��o dos 3 argumentos, somando `2` ao resultado da multiplica��o.
*/
function exercicio(x, y, z){
    if(x && y && z){
        return (x * y * z) + 2;
    }else{
        return "Preencha todos os valores corretamente!";
    }
}

//OUTRA FORMA
// function exercicio(x, y, z){
//     if(x && y && z){
//         return (x * y * z) + 2;
//     }
//         return "Preencha todos os valores corretamente!"; 
// }

// Invoque a fun��o criada acima, passando s� dois n�meros como argumento.
exercicio(1, 2);

// Qual o resultado da invoca��o acima? (Use coment�rios para mostrar o valor retornado).
//RESPOSTA: Preencha todos os valores corretamente!

// Agora invoque novamente a fun��o criada acima, mas passando todos os tr�s argumentos necess�rios.


// Qual o resultado da invoca��o acima? (Use coment�rios para mostrar o valor retornado).
exercicio(1, 2, 3); //RESPOSTA: 8.

/*
Crie uma fun��o com as seguintes caracter�sticas:
1. A fun��o deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condi��es acima forem atendidas, retorne `null`.
*/

function retornaDados(x, y, z){
    if(x && y && z){
        return (x + y) / z;
    }else if(x && !y && !z){
        return x;
    }else if(x && y && !z){
        return x + y;
    }else(!x && !y && !z){
        return false;
    }else{
        return null;
    }


// Invoque a fun��o acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com tr�s.) Coloque um coment�rio de linha ao lado da fun��o com o resultado de cada invoca��o.
retornaDados(); // false
retornaDados(1); // 1
retornaDados(1, 2); // 3
retornaDados(1, 2, 3); // 1
