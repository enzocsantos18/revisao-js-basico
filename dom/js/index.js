// Selecionar itens pelo id
var box = document.getElementById("box");
//Outros tipos de seleção

// var elementos = document.getElementsByName("nome-dos-elementos");
// var spans = document.getElementsByTagName("span");
// var elementos = document.getElementsByClassName("nome-da-classe");
// querySelectorAll()

//Navegando pela árvore
//** parent (pais)
//** siblings (irmãos)
//** childrens (filhos)

console.log("Elemento pai de box: ", box.parentNode)
console.log("Elementos filho de box: ", box.childNodes)
console.log("Elementos filho de box (especifico): ", box.childNodes[1])
console.log("Elementos irmãos de box (próximo): ", box.nextElementSibling)
console.log("Elementos irmãos de box (Antes): ", box.previousElementSibling)


//Atributos
// link.setAtributte("href", "http://www.w3.org/")

let link = document.getElementById("home");
// link.href = "#"
link.setAttribute("href", "#")
// console.log(link.href)
console.log(link.getAttribute("href"))


var novoItem = document.createElement('li');

var texto = document.createTextNode("Item 5")

novoItem.appendChild(texto);

console.log(novoItem)

var menu = document.getElementById("menu")


menu.appendChild(novoItem);

const btn =  document.getElementsByTagName("button")[0];
btn.addEventListener('click', toggleMenu)

function toggleMenu(){
  let menu = document.getElementById("menu")

  if(menu.classList.contains("hide")){
    menu.classList.remove("hide");
    menu.classList.add("show");
  }
  else{
    menu.classList.add("hide");
    menu.classList.remove("show");
  }

}

function adicionar(){
  var lista = document.getElementById("todos");
  var texto = document.getElementsByTagName("form")[0].firstElementChild.value;
  var item = document.createElement("li");
  item.innerHTML = texto;
  item.setAttribute("onclick", "remover(this.e)")
  lista.appendChild(item)
}

function remover(){
  console.log()
  console.log("teste")
}