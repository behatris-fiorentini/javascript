(function() {
    /*
    Crie uma IIFE que envolva todo esse arquivo (inclusive esse coment�rio),
    e fa�a a indenta��o correta.
    */

    /*
    Sem alterar os c�digos nos `console.log` abaixo, fa�a com que o retorno
    deles seja "true", usando os Wrapper Objects como "conversores" nos valores
    das vari�veis. Analise o que est� sendo impresso no console para saber como
    resolver o problema corretamente.
    */
    var five = Number('5');
    console.log(five + ' � n�mero?', typeof five === 'number');

    var concat = String(10) + 10;
    console.log('"' + concat + '" � uma string? E � igual a "1010"?', typeof concat === 'string');


    /*
    Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
    funcional, mas dessa vez, separando algumas responsabilidades.
    - Primeiro, crie um objeto chamado `operation` que ter� as propriedades:
    '+', '-', '*', '/' e '%'.
    - Cada propriedade vai receber uma fun��o (logo, elas ser�o m�todos), e essa
    fun��o receber� dois par�metros e retornar� a opera��o referente � sua
    propriedade, usando os valores passados por par�metro.
    */
    var operation = {
        '+': function(x, y) { return x + y; },
        '-': function(x, y) { return x - y; },
        '*': function(x, y) { return x * y; },
        '/': function(x, y) { return x / y; },
        '%': function(x, y) { return x % y; }
    };

    /*
    Crie uma fun��o chamada `isOperatorValid`, que receber� um operador por
    par�metro.
    - Essa fun��o ser� respons�vel por verificar se o operador passado por
    par�metro a ela � v�lido, ou seja, se ele � igual a '+', '-', '*', '/' ou
    '%'.
    - Se for igual a qualquer um desses, ela dever� retornar "true".
    Caso contr�rio, "false".
    - O desafio � fazer o retorno sem usar "if" ou "switch".
    */
    function isOperatorValid(operador) {
        return !!operation[operador];
    }


    /*
    Agora vamos criar a calculadora.
    - Crie uma fun��o chamada `calculator`, que receber� como par�metro um
    operador;
    - Se o operador n�o for v�lido, a fun��o deve retornar "false";
    - Se o operador for v�lido, retornar uma segunda fun��o que receber� dois
    par�metros;
    - Se algum dos par�metros n�o for um n�mero, retornar "false";
    - Sen�o, retornar o m�todo do objeto "operation" criado acima, baseado no
    operador passado para a fun��o "calculator", e passando para esse m�todo
    os dois par�metros da fun��o de retorno de "calculator".
    */
    function calculator(operador) {
        if (!isOperatorValid(operador)) {
            return false;
        }
        return function(x, y) {
            return typeof x !== 'number' || typeof y != 'number' ? false : operation[operador](x, y);
        };
    }

    /*
    Crie uma fun��o chamada "showOperationMessage" que recebe tr�s par�metros:
    - o operador, o primeiro n�mero e o segundo n�mero. O retorno da fun��o
    deve ser a frase:
    'A opera��o [NUMBER1] [OPERATOR] [NUMBER2] =';
    Essa fun��o mostrar� a mensagem da opera��o que criaremos mais abaixo.
    */
    function showOperationMessage(operador, num1, num2) {
        return 'A opera��o ' + num1 + ' ' + operador + ' ' + num2 + ' = ';
    }

    /*
    Crie uma fun��o chamada "showErrorMessage" que recebe um par�metro: o
    operador da opera��o c�lculo, quando a opera��o n�o for v�lida.
    Essa fun��o dever� retornar a frase:
    'Opera��o "[OPERATOR]" n�o permitida!'
    */
    function showErrorMessage(operador) {
        return 'Opera��o ' + operador + ' n�o permitida!';
    }

    /*
    Nossa calculadora est� pronta! Agora vamos test�-la:
    PASSO 1:
    - Declare 3 vari�veis: "number1" e "number2", iniciando com valor zero, e
    "operationSignal", sem valor por enquanto.
    */
    var number1 = 0;
    var number2 = 0;
    var operationSignal;

    /*
    PASSO 2:
    Atribua � vari�vel operationSignal o operador de soma, e declare uma
    vari�vel chamada "sum", que receba a fun��o "calculator", passando por
    par�metro a vari�vel que recebeu o sinal da opera��o.
    */
    operationSignal = '+';
    var sum = calculator(operationSignal);

    /*
    PASSO 3:
    "sum" agora � uma fun��o, e, se o sinal correto n�o foi passado para a
    fun��o "calculator", "sum" ser� false. Certifique-se de que "sum" n�o �
    "false", e ent�o atribua �s vari�veis "number1" e "number2", dois n�meros
    que ser�o os operandos da opera��o de soma.
    Ap�s isso, mostre no console o resultado da opera��o, passando dois
    par�metros para o m�todo "log" de "console":
    - O primeiro ser� a mensagem da opera��o (usando a fun��o criada acima);
    - O segundo, a fun��o de soma, passando os dois operandos.
    - Se "sum" for "false", mostrar no console a mensagem de erro.
    */
    if (sum) {
        number1 = 20;
        number2 = 35;
        console.log(showOperationMessage(operationSignal, number1, number2), sum(number1, number2));
    } else {
        console.log(showErrorMessage(operationSignal));
    }

    /*
    Repita desde o "PASSO 2" com as opera��es de subtra��o, multiplica��o,
    divis�o e resto. Crie vari�veis com os nomes "subtraction",
    "multiplication", "division" e "mod".
    */

    operationSignal = '-';
    var subtraction = calculator(operationSignal);
    if (subtraction) {
        number1 = 20;
        number2 = 35;
        console.log(showOperationMessage(operationSignal, number1, number2), subtraction(number1, number2));
    } else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = '*';
    var multiplication = calculator(operationSignal);
    if (multiplication) {
        number1 = 20;
        number2 = 35;
        console.log(showOperationMessage(operationSignal, number1, number2), multiplication(number1, number2));
    } else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = '/';
    var division = calculator(operationSignal);
    if (division) {
        number1 = 20;
        number2 = 35;
        console.log(showOperationMessage(operationSignal, number1, number2), division(number1, number2));
    } else {
        console.log(showErrorMessage(operationSignal));
    }

    operationSignal = '%';
    var mod = calculator(operationSignal);
    if (mod) {
        number1 = 20;
        number2 = 35;
        console.log(showOperationMessage(operationSignal, number1, number2), mod(number1, number2));
    } else {
        console.log(showErrorMessage(operationSignal));
    }


    /*
    Repita o PASSO 2 novamente, mas passando um operador inv�lido, para ver se
    a mensagem de erro ser� mostrada no console.
    */
    // ?

    operationSignal = '8';
    var sum = calculator(operationSignal);
    if (sum) {
        number1 = 20;
        number2 = 35;
        console.log(showOperationMessage(operationSignal, number1, number2), mod(number1, number2));
    } else {
        console.log(showErrorMessage(operationSignal));
    }

})();