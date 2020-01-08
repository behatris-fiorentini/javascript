(function() {
    /*
    Envolva todo o c�digo desse desafio em uma IIFE.
    Crie um arquivo chamado index.html e adicione esse script ao HTML.
    */

    /*
    Crie uma fun��o construtora chamada "Person". Esse construtor deve ter
    as seguintes caracter�sticas:
    - Deve receber 3 par�metros: `name`, `lastName` e `age`;
    - Dever� ter 3 propriedades:
      - `name` - que receber� o valor do par�metro `name`;
      - `lastName` - que receber� o valor do par�metro `lastName`;
      - `age` - que receber� o valor do par�metro `age`;
    - Dever� ter 3 m�todos:
      - `getFullName` - que deve retornar o nome completo do objeto criado,
      no formato:
        - "[NAME] [LASTNAME]"
      - `getAge` - que dever� retornar a idade (age);
      - `addAge` - esse m�todo n�o dever� ter nenhum par�metro, mas ao invoc�-lo
      iremos passar um �nico argumento, que � a quantidade de anos que devem ser
      adicionados � idade original (age). Esse m�todo dever� retornar o objeto
      que ser� instanciado.
    */

    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function() {
            return this.name + " " + this.lastName;
        };
        this.getAge = function() {
            return age;
        };
        this.addAge = function addAge() {
            this.age + arguments[0];
            return this;
        };
    }

    /*
    Crie 3 novos objetos usando o construtor acima. Os objetos ser�o novas
    pessoas. As vari�veis dever�o ser o primeiro nome da pessoa. Passe os
    par�metros corretamente para o construtor para criar as novas pessoas.
    Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
    */
    console.log('Novas pessoas criadas � partir de Person:');
    var pessoa1 = new Person('Juvelino', 'da Silva', 50);
    var pessoa2 = new Person('Braselino', 'de Souza', 40);
    var pessoa3 = new Person('Florinda', 'Oliveira', 35);
    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);

    /*
    Mostre no console o nome completo de cada pessoa.
    */
    console.log('\nNomes das pessoas:');
    console.log(pessoa1.getFullName());
    console.log(pessoa2.getFullName());
    console.log(pessoa3.getFullName());

    /*
    Mostre no console as idades de cada pessoa, com a frase:
    - "[NOME COMPLETO] tem [IDADE] anos."
    */
    console.log('\nIdade das pessoas:');
    console.log(pessoa1.getFullName() + " tem " + pessoa1.getAge() + " anos.");
    console.log(pessoa2.getFullName() + " tem " + pessoa2.getAge() + " anos.");
    console.log(pessoa3.getFullName() + " tem " + pessoa3.getAge() + " anos.");

    /*
    Adicione alguns anos � cada pessoa, e mostre no console a nova idade de
    cada um. A frase dever� ser no formato:
    - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
    */
    console.log('\nNova idade das pessoas:');
    console.log(pessoa1.getFullName() + " agora tem " + pessoa1.addAge(3).getAge() + " anos.");
    console.log(pessoa2.getFullName() + " agora tem " + pessoa2.addAge(4).getAge() + " anos.");
    console.log(pessoa3.getFullName() + " agora tem " + pessoa3.addAge(5).getAge() + " anos.");
})();