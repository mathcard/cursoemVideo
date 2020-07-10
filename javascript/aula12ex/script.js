function carregar(){
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var agora = new Date();  
  //var hora = agora.getHours();
  var hora = 20;
  msg.innerHTML = `Agora são ${hora} horas.`;
  
  console.log(hora);
  if(hora >= 0 && hora < 12){
    img.src = 'assets/manha.png';    
    document.body.style.background = '#ffd24d';
  }else if(hora >=12 && hora < 18){
    img.src = 'assets/tarde.png';
    document.body.style.background = '#e07b39';
  }else{ 
    img.src = 'assets/noite.png';
    document.body.style.background = '#00001a';
  }
}
