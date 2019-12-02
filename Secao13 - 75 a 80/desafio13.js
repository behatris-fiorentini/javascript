(function() {
    /*
    Envolva todo o c�digo desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representa��o em String desse array,
    usando o m�todo visto na aula 13.
    */
    console.log('O array em formato de string �:');

    var array = [1, 2, 3, 4, 5];
    console.log(array.toString());

    /*
    Crie 2 arrays `sul` e `sudeste`, que ser�o as regi�es do Brasil.
    Cada array deve conter os estados dessa regi�o.
    */
    var sul = ['Santa Catarina', 'Paran�', 'Rio Grande do Sul'];
    var sudeste = ['Esp�rito Santo', 'S�o Paulo', 'Minas Gerais', 'Rio de Janeiro'];

    /*
    Crie uma vari�vel chamada `brasil`, que ir� receber as duas regi�es
    concatenadas. Mostre o `brasil` no console.
    */
    console.log('\nAlguns Estados do Brasil:');

    var brasil = sul.concat(sudeste);
    console.log(brasil);

    /*
    Adicione 3 novos estados da regi�o Norte no in�cio do array e mostre no console.
    */
    console.log('\nMais estados adicionados:');
    brasil.unshift('Amaz�nia', 'Acre', 'Amap�');
    console.log(brasil);


    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log('\nEstado removido:');
    console.log(brasil.shift());

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. N�o remova esses itens de `brasil`.
    */
    var newSul = brasil.slice(2, 5);

    /*
    Mostre no console os estados que est�o em `newSul`.
    */
    console.log('\nEstados do Sul do Brasil:');
    console.log(newSul);

    /*
    Mostre no console todos os estados que est�o em `brasil`.
    */
    console.log('\nAlguns Estados do Brasil:');
    console.log(brasil);

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var nordeste = [
        'Alagoas',
        'Bahia',
        'Cear�',
        'Maranh�o',
        'Para�ba',
        'Pernambuco',
        'Piau�',
        'Rio Grande do Norte',
        'Sergipe'
    ];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log('\nEstados do Nordeste:');
    console.log(nordeste);

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma vari�vel
    chamada `newSudeste`.
    */
    var newsudeste = brasil.splice(5);

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo n�vel que os estados j� existentes, n�o em um array separado.
    */

    brasil = brasil.concat(nordeste);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log('\nEstados em newSudeste:');
    console.log(newsudeste);

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log('\nAlguns estados do Brasil:');
    console.log(brasil);

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que ser� o �ndice do array `brasil`,
    - `estado`: que ser� o estado do array `brasil`.
    */
    var newBrasil = [];
    brasil.forEach(function(item, index) {
        newBrasil.push({
            id: index,
            estado: item
        });
    });


    /*
    Mostre o array `newBrasil` no console
    */
    console.log('\nnewBrasil:');
    console.log(newBrasil);

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado � uma vari�vel. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Sen�o, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log('\nTodos os estados de `brasil` tem mais de 7 letras?');
    var contador = brasil.every(function(item) {
        return item.length > 7;
    });

    console.log(contador ? "Sim, todos os estados tem mais de 7 letras!" : "Nem todos os estados tem mais de 7 letras!");

    /*
    Percorra o array `brasil` e verifique se o Cear� est� inclu�do, atribuindo o
    resultado � uma vari�vel. Se esse estado existir no array, mostrar a frase no
    console:
    - "Cear� est� inclu�do!"
    Sen�o, mostrar a frase:
    - "Cear� n�o foi inclu�do :("
    */
    console.log('\nCear� est� inclu�do em `brasil`?');
    var busca = brasil.some(function(item) {
        return item === "Cear�";
    });

    console.log(busca ? "Cear� est� inclu�do!" : "Cear� n�o foi inclu�do :(");

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma vari�vel chamada `map`.
    */
    var newArrBrasil = newBrasil.map(function(item) {
        return {
            id: item.id + 1,
            estado: item.estado + ' pertence ao Brasil.'
        };
    });


    /*
    Mostre no console o array criado acima:
    */
    console.log('\nnewBrasil agora com mais informa��es:');
    console.log(newArrBrasil);


    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor � uma vari�vel chamada `filter`.
    */
    var filter = newArrBrasil.filter(function(item) {
        return item.id % 2 === 0;
    });

    /*
    Mostre o array filtrado acima no console.
    */
    console.log('\nEstados com ID par:');
    console.log(filter);

})();