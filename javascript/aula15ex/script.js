function verificar(){
  var agora = new Date();
  var ano = agora.getFullYear();  
  
  var nascTxt = document.getElementById('ano');
  var nasc = nascTxt.value;  
  var genero = '';
  
  var resultado = document.querySelector('div#resultado');  
    
  var img = document.createElement('img');
  img.setAttribute('id', 'foto');

  if(nasc == 0 || nasc > ano){
    alert('Verifique os dados e tente novamente.')
  }else{
    var idade = ano - nasc;
    var sexo = document.getElementsByName('sexo');
    console.log(sexo);
    if(sexo[0].checked){
      genero = 'Homem';
      //img.src = 'midoso.jpg';
      if(idade >= 0 && idade < 10){
        img.src = 'mcrianca.jpg';
      }else if ( idade >= 10 && idade <= 20){
        img.src = 'madolescente.png';
      }else{      
        img.src = 'midoso.jpg';
      }
    }else{
      genero = 'Mulher';
      if(idade >= 0 && idade < 10){
        img.src = 'fcrianca.jpg';
      }else if ( idade >= 10 && idade <= 20){
        img.src = 'fadolescente.jpg';
      }else{
        img.src = 'fidoso.jpg';
      }
  }  
        
  img.style.borderRadius = '50%';  
  img.style.width = '100px';
  img.style.marginTop = '10px';
    
  resultado.style.textAlign = 'center';
  resultado.innerHTML = `Dectamos ${genero} com ${idade} anos de idade.<br>`    
  resultado.appendChild(img);
  }   
}
