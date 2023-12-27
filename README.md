1) Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

```js
// Criando um array esparso
const arrayEsparso = [];

// Atribuindo valores a alguns elementos do array
arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';

// Imprimindo os resultados
console.log(arrayEsparso);
console.log(arrayEsparso.length);
```

2) Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

```js
// Inicializando o array com cinco elementos
let meuArray = [10, 20, 30, 40, 50];

// Exibindo o array antes da alteração
console.log("Array antes da alteração: ", meuArray);

// Atribuindo um novo valor para a primeira posição (índice 0) do array
meuArray[0] = 5;

// Exibindo o array depois da alteração
console.log("Array depois da alteração: ", meuArray);
```

3) Crie um array vazio chamado `meuArray` e adicione 3 números inteiros de sua escolha utilizando o método `push()`. Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

```js
const meuArray = []; // Criando um array vazio
meuArray.push(5); // Adicionando números ao array
meuArray.push(10);
meuArray.push(15);

//Exibição dos Itens
console.log("Itens no array meuArray:", meuArray);

//Atualização de Itens
//Dobrando o valor do primeiro elemento
meuArray[0] = meuArray[0] * 2; 
//mesma operação utilizando o operador `*=`
//meuArray[0] *= 2;
console.log("Array após a atualização do primeiro elemento:", meuArray);
```

4) Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método `push()`. Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

```js
// Criando um array vazio
let meuArray = [];

// Atribuindo valores ao array usando o método push()
meuArray.push(10);
meuArray.push(20);
meuArray.push(30);

// Exibindo o array resultante
console.log("Array resultante: ", meuArray);
```

5) Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado `clinica` que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. 
Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

Resolução:

```js
// Criando um array vazio para representar a fila de animais na clínica
const clinica = [];

// Chegada de animais na clínica
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

// Exibindo a fila de animais na clínica após a chegada
console.log("Fila de animais após a chegada: ", clinica);

// Removendo cada animal da lista:
clinica.pop();
clinica.pop();
clinica.pop();

// Exibindo o estado final da lista:
console.log("Fila de animais aguardando: ", clinica);
```