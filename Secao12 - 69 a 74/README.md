###CRIAÇÃO DE OBJETOS
* Objetos são mutáveis e manipulados por referência;
* Consigo manipular por referência:
    var obj = {ob: 1, ob2: 2}
    var obj2 = obj
    var obj.ob = 'teste'
    obj2 --> {ob: 'teste', ob2: 2} -> altero os dois
    -> Só o objeto que herdou que recebe as alterações, se alterar o obj2, as mudanças serão refletidas só nele. Se eu editar o obj (pai), as mudanças também refletem no obj2.

    Agora, se eu criar o obj2 assim --> obj2 = Object.create(obj), quando eu chamar ele para ver suas propriedades, não terá nada, mas se eu chamar ele com alguma propriedade de obj, qu foi com base no que foi criado, ele trará as propriedades dele;

###CRIANDO OBJETOS
* Podemos criar com construtor new;
* Com literal {}; --> é melhor/ mais rápido
* Object --> função javaq script que retorna um objeto vazio; Tamém cria um objeto;
* Object possui uma propriedade create -> cria um objeto (Object.vreate());
* Object.prototype
* Cada objeto criado herda do prototipo do seu objeto;

###MÉTODOS DE OBJETO
* toString -> converte o valor do objeto em string;
* hasOwnPropety(); --> Só mostra as propriedades do proprio objeto, não mostra as herdadas;
* Object.keys() --> Array com as propriedades do obj (podemos utilizar propriedades de array no objeto);
* Object.isPrototypeOf() --> Verifica se o objeto é prototypo de algum outro; (true/false)
* JSON.stringify() <-> JSON.parse(); 

##ARRAYS
* arr.pop() --> Remove do fim do array (o último item do array): array.pop() 
* arr.join() --> junta itens do array em uma string. Aceita um parâmetro que é o separador;
* arr.reverse() --> inverte os itens do array (de trás para frente) e ao utiliza-lo, mexe direto no array pricipal;
* arr.sort() --> ordena em ordem alfabética (modifica direto no array);