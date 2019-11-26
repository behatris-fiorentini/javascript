// Declarar uma vari�vel chamada `myvar`, sem valor.
var myvar;

// Ap�s declarada, atribua o valor 10 � vari�vel `myvar`.
myvar = 10;

// Declare uma nova vari�vel chamada `soma`, e adicione uma instru��o somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua � vari�vel `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;
//soma ++;
//++soma;

// Atribua � vari�vel `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplica��o abreviado.
soma *= 3;

// Qual � o valor da vari�vel `soma` at� aqui?
//RESPOSTA = 72

// Declare uma vari�vel chamada `souninja`, atribuindo � ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma vari�vel chamada `comida` que recebe um array com os valores 'arroz', 'feij�o' e 'ovo'.
var comida = ["arroz", "feij�o", "ovo"];

// Digite a instru��o que imprime o valor de 'feijao', que est� na vari�vel `comida`.
comida[1];

// Digite o c�digo que verifica se a vari�vel `soma' � igual a vari�vel `myvar` (testando tamb�m o tipo).
soma === myvar; //false

// Digite o c�digo que verifica se a vari�vel `myvar` � menor ou igual � vari�vel `soma`.
myvar <= soma; //true

// Crie uma fun��o chamada `divisao` que receba como par�metro dois n�meros, e retorne o resultado da divis�o entre eles.
function divisao(x, y) {
    return x / y;
}

// Invoque a fun��o criada acima, passando os par�metros 10 e 2.
divisao(10, 2); //RESPOSTA =  2


//EXEMPLO
var um = 1;
var dois = um++; //dois fica valendo 1, porque um++ � um p�s incremento (eu atribuo o valor e depois somo) e a vari�vel um fica valendo 2;

var tres = 3;
var quatro = ++3; //nesse caso, o quatro vai ser 4, porque eu somo e depois atrbuo e tres tamb�m vai ser 4;