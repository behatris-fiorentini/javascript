// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;
//soma ++;
//++soma;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
//RESPOSTA = 72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ["arroz", "feijão", "ovo"];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
comida[1];

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma === myvar; //false

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar <= soma; //true

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(x, y) {
    return x / y;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao(10, 2); //RESPOSTA =  2


//EXEMPLO
var um = 1;
var dois = um++; //dois fica valendo 1, porque um++ é um pós incremento (eu atribuo o valor e depois somo) e a variável um fica valendo 2;

var tres = 3;
var quatro = ++3; //nesse caso, o quatro vai ser 4, porque eu somo e depois atrbuo e tres também vai ser 4;