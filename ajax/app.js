carregarDados();

async function carregarDados(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users/enzocsantos18/repos', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status = 200){
        popularTela(xhr.response);
      }
    }
  }
  await xhr.send();  
}


function popularTela(response){
  const data = JSON.parse(response)
  const repos = document.getElementById('repos');

  data.map(item => {
    const box = document.createElement('div');
    box.setAttribute('class', 'repo');
    box.setAttribute('onmouseover', 'over(this)');
    box.setAttribute('onmouseout', 'leave(this)');
    box.setAttribute('onclick', `abrir("${item.description}")`);
    
    box.innerHTML += `
      <h3>${item.name}</h3>
    `
    repos.appendChild(box)
  })
}

function over(x){
  x.style.cursor = 'pointer';
  x.style.background = '#babaca'
  x.style.transform = "scale(1.1, 1.1)";
}

function leave(x){
  x.style.transform = "scale(1, 1)";
  x.style.background =  '#e3e3e3'
}

function abrir(description){
  const body = document.querySelector('body');
  const box = document.createElement('div');
  const bgToogle = document.getElementById('bgToogle');

  bgToogle.classList.add('bg');
  box.setAttribute('class', 'box');
  box.innerHTML = `<button onclick='fechar(this)'>< Voltar</button><p>${description}</p>`
  body.style.overflow = 'hidden';
  body.append(box)
}

function fechar(x){
  const parentNode = x.parentNode;
  const bgToogle = document.getElementById('bgToogle');
  const body = document.querySelector('body');
  body.style.overflow = 'inherit';

  bgToogle.classList.remove('bg');
  parentNode.remove();
}

function fecharBg(x){
  const bgToogle = document.getElementById('bgToogle');
  const box = document.querySelector('div.box');
  const body = document.querySelector('body');
  body.style.overflow = 'inherit';


  box.remove();
  bgToogle.classList.remove('bg');
}