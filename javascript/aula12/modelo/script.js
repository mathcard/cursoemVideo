var agora = new Date();
//var hora = agora.getHours();
var hora = 12;
//alert(hora);
if(hora > 0 && hora < 13){
  var img = document.getElementsByClassName('imagem');
  //img.currentSrc = 'https://www.aluralingua.com.br/artigos/assets/night.jpg'
  console.log(img);
  alert('manhã')
}else if(hora < 19){
  alert('tarde')
}else if(hora < 23){
  alert('noite')
}else{
  alert('madrugada');
}

