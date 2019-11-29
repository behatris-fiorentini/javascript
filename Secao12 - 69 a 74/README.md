###CRIA��O DE OBJETOS
* Objetos s�o mut�veis e manipulados por refer�ncia;
* Consigo manipular por refer�ncia:
    var obj = {ob: 1, ob2: 2}
    var obj2 = obj
    var obj.ob = 'teste'
    obj2 --> {ob: 'teste', ob2: 2} -> altero os dois
    -> S� o objeto que herdou que recebe as altera��es, se alterar o obj2, as mudan�as ser�o refletidas s� nele. Se eu editar o obj (pai), as mudan�as tamb�m refletem no obj2.

    Agora, se eu criar o obj2 assim --> obj2 = Object.create(obj), quando eu chamar ele para ver suas propriedades, n�o ter� nada, mas se eu chamar ele com alguma propriedade de obj, qu foi com base no que foi criado, ele trar� as propriedades dele;

###CRIANDO OBJETOS
* Podemos criar com construtor new;
* Com literal {}; --> � melhor/ mais r�pido
* Object --> fun��o javaq script que retorna um objeto vazio; Tam�m cria um objeto;
* Object possui uma propriedade create -> cria um objeto (Object.vreate());
* Object.prototype
* Cada objeto criado herda do prototipo do seu objeto;

###M�TODOS DE OBJETO
* toString -> converte o valor do objeto em string;
* hasOwnPropety(); --> S� mostra as propriedades do proprio objeto, n�o mostra as herdadas;
* Object.keys() --> Array com as propriedades do obj (podemos utilizar propriedades de array no objeto);
* Object.isPrototypeOf() --> Verifica se o objeto � prototypo de algum outro; (true/false)
* JSON.stringify() <-> JSON.parse(); 

##ARRAYS
* arr.pop() --> Remove do fim do array (o �ltimo item do array): array.pop() 
* arr.join() --> junta itens do array em uma string. Aceita um par�metro que � o separador;
* arr.reverse() --> inverte os itens do array (de tr�s para frente) e ao utiliza-lo, mexe direto no array pricipal;
* arr.sort() --> ordena em ordem alfab�tica (modifica direto no array);