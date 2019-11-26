// Declarar uma vari�vel qualquer, que receba um objeto vazio.
var variavel = {};

/*
Declarar uma vari�vel `pessoa`, que receba suas informa��es pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padr�o
- `caminhouQuantosMetros` - Number - recebe "zero" por padr�o
*/
var pessoa = {
    nome: "Behatris",
    sobrenome: "Fiorentini",
    sexo: "Feminino",
    idade: 24,
    altura: 1.64,
    peso: 67,
    andando: false,
    caminhouQuantosMetros: 0
};


/*
Adicione um m�todo ao objeto `pessoa` chamado `fazerAniversario`. O m�todo deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function() { pessoa.idade++; };

/*
Adicione um m�todo ao objeto `pessoa` chamado `andar`, que ter� as seguintes
caracter�sticas:
- Esse m�todo deve receber por par�metro um valor que representar� a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por par�metro;
- Ele dever� modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(metros) {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
};

/*
Adicione um m�todo ao objeto `pessoa` chamado `parar`, que ir� modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
    pessoa.andando = false;
}

/*
Crie um m�todo chamado `nomeCompleto`, que retorne a frase:
- "Ol�! Meu nome � [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function() {
    return "Ol�! Meu nome � " + pessoa.nome + " " + pessoa.sobrenome + "!";
}

/*
Crie um m�todo chamado `mostrarIdade`, que retorne a frase:
- "Ol�, eu tenho [IDADE] anos!"
*/
pessoa.mostraIdade = function() {
    return "Ol�! Eu tenho " + pessoa.idade + " anos!";
}

/*
Crie um m�todo chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mestrarPeso = function() {
    return "Eu peso " + pessoa.peso + " Kg.";
}

/*
Crie um m�todo chamado `mostrarAltura` que retorne a frase:
- "Minha altura � [ALTURA]m."
*/
pessoa.mostrarAltura = function() {
    return "Minha altura � " + pessoa.altura + "m.";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instru��o para responder e coment�rios
inline ao lado da instru��o para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto(); //Ol�! Meu nome � Behatris Fiorentini!

/*
Qual a idade da pessoa? (Use a instru��o para responder e coment�rios
inline ao lado da instru��o para mostrar qual foi a resposta retornada)
*/
pessoa.mostraIdade(); // Ol�! Eu tenho 24 anos!

/*
Qual o peso da pessoa? (Use a instru��o para responder e coment�rios
inline ao lado da instru��o para mostrar qual foi a resposta retornada)
*/
pessoa.mestrarPeso(); //Eu peso 67Kg.

/*
Qual a altura da pessoa? (Use a instru��o para responder e coment�rios
inline ao lado da instru��o para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura(); //Minha altura � 1.64m.

/*
Fa�a a `pessoa` fazer 3 anivers�rios.
*/
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

/*Quantos anos a `pessoa` tem agora? (Use a instru��o para responder e
coment�rios inline ao lado da instru��o para mostrar qual foi a resposta
retornada)
*/
pessoa.idade; //27 anos
pessoa.mostraIdade(); //Ol�! Eu tenho 27 anos!

/*
Agora, fa�a a `pessoa` caminhar alguns metros, invocando o m�todo `andar` 3x,
com metragens diferentes passadas por par�metro.
*/
pessoa.andar(100);
pessoa.andar(500);
pessoa.andar(1000);


/*
A pessoa ainda est� andando? (Use a instru��o para responder e coment�rios
inline ao lado da instru��o para mostrar qual foi a resposta retornada)
*/
pessoa.andando; //true

/*
Se a pessoa ainda est� andando, fa�a-a parar.
*/
pessoa.parar();

/*
E agora: a pessoa ainda est� andando? (Use uma instru��o para responder e
coment�rios inline ao lado da instru��o para mostrar a resposta retornada)
*/
pessoa.andando; //false

/*
Quantos metros a pessoa andou? (Use uma instru��o para responder e coment�rios
inline ao lado da instru��o para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros; //1600 metros

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um m�todo para o objeto `pessoa` chamado `apresentacao`. Esse m�todo deve
retornar a string:
- "Ol�, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso � [PESO] e, s� hoje, eu j� caminhei [CAMINHOU QUANTOS METROS] metros!"

S� que, antes de retornar a string, voc� vai fazer algumas valida��es:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no in�cio da
apresenta��o, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao inv�s de "anos", pois � singular;
- Se a quantidade de metros caminhados for igual a `1`, ent�o a palavra que
deve conter no retorno da frase acima � "metro" no lugar de "metros".
- Para cada valida��o, voc� ir� declarar uma vari�vel localmente (dentro do
m�todo), que ser� concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function() {
    var artigo = "o";
    var ano = "anos";
    var metro = "metros";

    if (pessoa.sexo === "Feminino") {
        artigo = "a";
    }

    if (pessoa.idade === 1) {
        ano = "ano";
    }

    if (pessoa.caminhouQuantosMetros <= 1) {
        metro = "metro";
    }

    return "Ol�, eu sou " + artigo + " " + pessoa.nome + " " + pessoa.sobrenome + ", tenho " + pessoa.idade + " " + ano + ", " + pessoa.altura + ", meu peso � " + pessoa.peso + " e, s� hoje, eu caminhei " + pessoa.caminhouQuantosMetros + " " + metro + "!";
}

// Agora, apresente-se ;)
pessoa.apresentacao(); //Ol�, eu sou a Behatris Fiorentini, tenho 24 anos, 1.64, meu peso � 67 e, s� hoje, eu caminhei 30000 metros!