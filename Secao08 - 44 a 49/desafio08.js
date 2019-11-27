/*
Declare uma vari�vel chamada `sum` e atribua a ela uma fun��o chamada
`calculateSum`. A fun��o deve receber dois par�metros e retornar a soma
desses par�metros.
*/
var sum = function calculateSum(x, y) {
    return x + y;
};

/*
Invoque a fun��o criada acima, passando dois n�meros que ser�o somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] � igual a [RESULTADO]."
*/
var num1 = 192;
var num2 = 156;
console.log("A soma de " + num1 + " e " + num2 + " � igual a " + sum(num1, num2) + ".");

/*
Mostre no console o nome da fun��o criada acima, com a frase:
"O nome da fun��o que faz a soma � [NOME DA FUN��O]."
*/
console.log("O nome da fun��o que faz a soma � " + sum.name + ".");

/*
Crie uma fun��o literal chamada `showName`. Essa fun��o deve retornar o
seu nome.
*/

function showName() {
    return "Behatris Fiorentini";
}

/*
Declare uma vari�vel chamada `varShowName` que recebe a fun��o criada acima.
*/

var varShowName = showName;

/*
Usando a vari�vel criada acima, mostre no console o nome e o retorno da fun��o
atribu�da a ela, com a seguinte frase:
"A fun��o [NOME DA FUN��O] retorna [RETORNO DA FUN��O]."
*/
console.log("A fun��o " + varShowName.name + " retorna " + varShowName() + ".");

/*
Crie uma fun��o literal chamada `calculator`, que funcione assim:
- A fun��o deve receber um par�metro que dir� qual opera��o matem�tica ela
vai efetuar. Ser� uma string com os valores `+`, `-`, `*`, `/` ou `%`;

- Essa fun��o deve retornar uma segunda fun��o que far� o seguinte:
  - Essa segunda fun��o deve receber dois par�metros;

  - Esses dois par�metros ser�o os operandos usados na opera��o matem�tica;

  - O retorno dessa segunda fun��o � a opera��o matem�tica completa, com a frase:

  "Resultado da opera��o: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  
  - Se o operador n�o for v�lido, retornar a frase:
  "Opera��o inv�lida."
*/

function calculator(param) {
    return function(x, y) {
        var resultado;
        switch (param) {
            case "+":
                resultado = x + y;
                break;

            case "-":
                resultado = x - y;
                break;

            case "*":
                resultado = x * y;
                break;

            case "/":
                resultado = x / y;
                break;

            case "%":
                resultado = x % y;
                break;

            default:
                return "Opera��o Inv�lida!";
        }

        return "Resultado da opera��o: " + x + " " + param + " " + y + " = " + resultado + ".";
    };
}

/*
Declare uma vari�vel chamada `sum`, que receber� a fun��o acima, passando como
par�metro o operador de soma.
*/
var sum = calculator("+");

/*
Agora `sum` � uma fun��o. Mostre no console a soma de dois n�meros, usando ela.
*/
console.log(sum(2, 2));

/*
Agora, declare algumas vari�veis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a fun��o `calculator`, passando o operador
correto por par�metro para cada uma delas.
*/
var subtraction = calculator("-");
var multiplication = calculator("*");
var division = calculator("/");
var mod = calculator("%");

/*
Fa�a uma opera��o com cada uma das fun��es criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(569, 456)); //Resultado da opera��o: 569 - 456 = 113.
console.log(multiplication(785, 89)); //Resultado da opera��o: 785 * 89 = 69865.
console.log(division(7456, 15)); //Resultado da opera��o: 7456 / 15 = 497.06666666666666.
console.log(mod(7895, 5)); //Resultado da opera��o: 7895 % 5 = 0.