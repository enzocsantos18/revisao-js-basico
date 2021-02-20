

function carregar(){
  console.log("teste")
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var img = document.getElementById('imagem');

  const data = new Date();
  const hora = data.getHours();

  msg.innerText = `Agora são ${hora} horas`

  if(hora >= 0 && hora < 12 ){
    img.src = './imgs/manha.jpg'
    document.body.style.backgroundColor = '#adfcff';
  }else if(hora >= 12 && hora <= 18 ){
    img.src = './imgs/tarde.jpg'
    document.body.style.backgroundColor = '#ff8317';

  }
  else{
    img.src = './imgs/noite.jpg'
    document.body.style.backgroundColor = '#213547';


  }
}

carregar();