let arr = [1, 2, 3, 4, 5, 6, 8, 9, 'banana'];

//Substitudo do foreach
arr.map(item =>{
  console.log(item)
})

//Adicionar item no array
arr.push(10)

//Remover primeiro item do Array
const item_removido_inicio = arr.shift();

//Remover último item do Array
const item_removido = arr.pop();

//Filtro
const filtrados = arr.filter(item => item < 5);


//IndexOf
const index = arr.indexOf('banana')

//Remover item de uma determinada posição
const item_removido_pos = arr.splice(2, 1);

let pessoas = [
  {
    nome: "Enzo de Carvalho",
    idade: 18,
  },
  {
    nome: "Nicolas de Carvalho",
    idade: 22,
  },
  {
    nome: "Arcrebiano",
    idade: 25,
  },
  {
    nome: "Rodrigo",
    idade: 50,
  },

]

console.log(pessoas.filter(pessoa => pessoa.idade > 20))
console.log(pessoas.shift(pessoa => pessoa.idade < 20))
console.log(pessoas)
console.log("Ultimo item removido:", item_removido )
console.log("Primeiro item removido:", item_removido_inicio )
console.log("Index do item banana:", index )
console.log("Item removido por posição:", item_removido_pos )
console.log("Itens filtrados:", filtrados )
console.log(arr)