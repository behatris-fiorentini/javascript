(function() {
    /*
    Envolva todo o c�digo desse desafio em uma IIFE.
    */

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento ser� um objeto no formato:
    { number: [NUMBER] }
    Os n�meros devem ser de 1 a 10.
    Mostre esse array no console.
    */
    console.log('Number Objects Array:');
    var numberObjects = [];

    for (var i = 1; i <= 10; i++) {
        numberObjects.push({
            number: i
        });
    }

    console.log(numberObjects);

    /*
    Crie um array chamado `justNumbers`, que ter� como elementos somente os
    n�meros do array criado acima. Mostre esse novo array no console.
    */
    console.log('\nJust Numbers:');
    var justNumbers = numberObjects.map(function(item) {
        return item.number;
    });

    console.log(justNumbers);

    /*
    Crie um novo array chamado `justMod2Or3`, que receber� do array criado acima
    somente os n�meros que forem divis�veis por 2 ou 3. Mostre esse novo array
    no console.
    */
    console.log('\nJust module of division by 2 or 3:');
    var justMod2Or3 = justNumbers.filter(function(item) {
        return item % 2 === 0 || item % 3 === 0;
    });

    console.log(justMod2Or3);

    /*
    Declare uma vari�vel chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte opera��o:
    - Somar 1 ao �ltimo valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O c�lculo deve come�ar com zero.
    Mostre o resultado no console.
    */
    console.log('\nOperation:');
    var operation = justMod2Or3.reduce(function(acumulado, atual) {
        return (acumulado + 1) * atual;
    }, 0);

    console.log(operation);

    /*
    Fa�a o mesmo c�lculo passado acima, mas come�ando do �ltimo item para o
    primeiro. O nome da vari�vel deve ser operation2. Mostre o resultado no
    console.
    */
    console.log('\nOperation 2:');
    var operation2 = justMod2Or3.reduceRight(function(acumulado, atual) {
        return (acumulado + 1) * atual;
    }, 0);

    console.log(operation2);

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma s�laba
    do seu nome. Vamos reduzir esse array, juntando todas as s�labas, mas usando
    a "l�ngua do P".
    PS.: Lembra da l�ngua do "P"? N�o? A l�ngua do "P" � uma brincadeira
    infantil, onde voc� coloca a letra "P" antes de cada s�laba de uma palavra
    falada, como se voc� estivesse falando em c�digo xD
    */
    console.log('\nSeu nome na l�ngua do "P":');
    var name = ['Be', 'ha', 'tris'];
    var linguaP = name.reduce(function(acumulado, atual) {
        return acumulado + ' P' + atual;
    }, '');

    console.log(linguaP);

    /*
    Crie uma vari�vel chamada `inversedName`, que reduzir� o array em uma string
    e atribuir� o seu nome invertido (usando o array criado acima).
    */
    console.log('\nInversed Name:');
    var inversedName = name.reduceRight(function(acumulado, atual) {
        return acumulado + atual;
    }, '');

    console.log(inversedName);

    /*
    Mostre no console o array `numberObjects`.
    */
    console.log('\nNumber objects');
    console.log(numberObjects);

    /*
    Verifique se existem em algum �ndice de numberObjects um objeto �gual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Sen�o, mostre a frase:
    - "N�o existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */
    console.log('\nExiste um { number: 2 } em numberObjects?');

    console.log(numberObjects.indexOf({
        number: 2
    }) > (-1) ? "Existe um objeto { number: 2 } em numberObjects!" : "N�o existe um objeto { number: 2 } em numberObjects :(");

    //A resposta � -1 porque, quando se cria um objeto, ele cria uma referencia �nica na mem�ria, nenhum objeto � igual ao outro,
    // por isso ele n�o � igual ao { number: 2 } de dentro do array, porque ele � um novo objeto, que n�o apontam para a mesma refer�ncia

    /*
    Fazendo o mesmo do exerc�cio acima, mas come�ando a buscar do �ltimo �ndice,
    ser� que obtemos um resultado diferente? Fa�a a busca a partir do �ndice 2.
    */
    console.log('\nE buscando a partir do �ltimo �ndice, o { number: 2 } existe?');
    //N�o, o resultado � o mesmo, pois os objetos n�o apontam para a mesma refer�ncia;
    console.log(numberObjects.lastIndexOf({
        number: 2
    }) > (-1) ? "Existe um objeto { number: 2 } em numberObjects!" : "N�o existe um objeto { number: 2 } em numberObjects :(");

    /*
    Verifique se `justMod2Or3` � um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log('\njustMod2Or3 � um array? Se for, a representa��o dele em String �:');
    console.log(Array.isArray(justMod2Or3) ? justMod2Or3.toString() : '');
})();