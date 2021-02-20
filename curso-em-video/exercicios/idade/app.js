function verificar() {
  const data = new Date();
  const ano = data.getFullYear();

  const anoSelecionado = document.getElementById("ano").value;
  const res = document.querySelector("div#res");

  const idade = ano - Number(anoSelecionado);
  const img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (idade < 0 || anoSelecionado.length == 0) {
    alert("Você digitou um ano que não aconteceu ainda!");
    return;
  } else {
    var sexo = document.getElementsByName("sexo");
    let genero = "";
    if (sexo[0].checked) {
      genero = "Masculino";

      if(idade >= 0 && idade < 10){
        img.setAttribute('src', './imgs/foto-bebe-m.png')
      } else if (idade < 21){
        img.setAttribute('src', './imgs/foto-jovem-m.png')

      } else if (idade < 50){
        img.setAttribute('src', './imgs/foto-adulto-m.png')

      } else {
        img.setAttribute('src', './imgs/foto-idoso-m.png')

      }
    } else {
      genero = "Feminino";

      if(idade >= 0 && idade < 10){
        img.setAttribute('src', './imgs/foto-bebe-f.png')
      } else if (idade < 21){
        img.setAttribute('src', './imgs/foto-jovem-f.png')

      } else if (idade < 50){
        img.setAttribute('src', './imgs/foto-adulto-f.png')

      } else {
        img.setAttribute('src', './imgs/foto-idoso-f.png')

      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Idade calculada:  ${idade} anos; Genero: ${genero}`;

    res.append(img);
  }
}
