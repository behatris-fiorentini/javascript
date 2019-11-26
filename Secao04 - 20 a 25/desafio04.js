/*
Declare uma vari�vel chamada `isTruthy`, e atribua a ela uma fun��o que recebe
um �nico par�metro como argumento. Essa fun��o deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contr�rio.
*/
var isTruthy = function(param){
    return param ? true : false;
}

// Invoque a fun��o criada acima, passando todos os tipos de valores `falsy`.
isTruthy(null);
isTruthy(undefined);
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);
isTruthy(false);
isTruthy("");
isTruthy('');

/*
Invoque a fun��o criada acima passando como par�metro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy("Bia");
isTruthy(true);
isTruthy(25);
isTruthy("23");
isTruthy(!false);
isTruthy("Ninja");
isTruthy('paralelepipedo');
isTruthy(12.12);
isTruthy('478952');

/*
Declare uma vari�vel chamada `carro`, atribuindo � ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padr�o
- `quantidadePessoas` - Number - zero por padr�o
*/
 var carro = {
     marca: "Toyota",
     modelo: "Corola",
     placa: "ABC 1234",
     ano: 2019,
     cor: "Preto",
     quantasPortas: 4,
     assentos: 5,
     quantidadePessoas: 0
 };

/*
Crie um m�todo chamado `mudarCor` que mude a cor do carro conforme a cor
passado por par�metro.
*/
carro.mudarCor = function(cor){
    carro.cor = cor;
}

/*
Crie um m�todo chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um m�todo chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um m�todo chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um m�todo chamado `obterMarcaModelo`, que retorne:
"Esse carro � um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os m�todos criados.
*/
carro.obterMarcaModelo = function(){
    return "Esse carro � um " + carro.marca + " " + carro.modelo;
}

carro.obterMarcaModelo(); //Esse carro � um Toyota Corola



/*
Crie um m�todo que ir� adicionar pessoas no carro. Esse m�todo ter� as
seguintes caracter�sticas:

- Ele dever� receber por par�metro o n�mero de pessoas entrar�o no carro. Esse
n�mero n�o precisa encher o carro, voc� poder� acrescentar as pessoas aos
poucos.

- O m�todo deve retornar a frase: "J� temos [X] pessoas no carro!"

- Se o carro j� estiver cheio, com todos os assentos j� preenchidos, o m�todo
deve retornar a frase: "O carro j� est� lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
par�metro for ultrapassar o limite de assentos do carro, ent�o voc� deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:

"S� cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionaPessoa = function(numPessoa){
    var totalPessoas = carro.quantidadePessoas + numPessoa;
    var aindaCabem = carro.assentos - carro.quantidadePessoas;
    var pessoa = aindaCabem === 1 ? "pessoa" : "pessoas";
    var cabe = aindaCabem === 1 ? "cabe" : "cabem";

    if(carro.quantidadePessoas === 5){
        return "O carro j� est� lotado!";
    }else if(totalPessoas > 5){
        return "S� " + cabe + " mais " + aindaCabem + " " + pessoa;
    }

    carro.quantidadePessoas += numPessoa;
    return "J� temos " + carro.quantidadePessoas + " no carro!";
}


/*
Agora vamos verificar algumas informa��es do carro. Para as respostas abaixo,
utilize sempre o formato de invoca��o do m�todo (ou chamada da propriedade),
adicionando coment�rios _inline_ ao lado com o valor retornado, se o m�todo
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //Preto

// Mude a cor do carro para vermelho.
carro.cor = "Vermelho";

// E agora, qual a cor do carro?
carro.obterCor(); //Vermelho

// Mude a cor do carro para verde musgo.
carro.cor = "Verde Musgo";

// E agora, qual a cor do carro?
carro.obterCor(); //Verde Musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); //Esse carro � um Toyota Corola

// Adicione 2 pessoas no carro.
carro.adicionaPessoa(2); //'J� temos 2 no carro!'

// Adicione mais 4 pessoas no carro.
carro.adicionaPessoa(4); 'S� cabem mais 3 pessoas'

// Fa�a o carro encher.
carro.adicionaPessoa(3); //'J� temos 5 no carro!'

// Tire 4 pessoas do carro.
carro.tiraPessoa = function(numPessoa){
    return carro.quantidadePessoas -= numPessoa;
}

carro.tiraPessoa(4); //1

// Adicione 10 pessoas no carro.
carro.adicionaPessoa(10); 'S� cabem mais 4 pessoas'

// Quantas pessoas temos no carro?
carro.quantidadePessoas(); //1