function contar(){
  var inicio = document.querySelector('input#inicio');  
  var final = document.getElementById('fim');
  var pular = document.querySelector('input#salto');
  var res = document.querySelector('div.texto');
  
  var num1 = Number(inicio.value);    
  var num2 = Number(final.value);
  var salto = Number(pular.value);  
  if(num1 == '' || num2 == '' || salto == ''){
    alert('Informe todos os dados!')
  }else{
    res.innerHTML = 'Contando...';
    // contagem crescente
    if(num1 < num2){
      do{
        res.innerHTML += ` ${num1} \u{1F449} `;      
        num1 += salto;              
      }while(num1 < num2);          
    }else{ // Contagem decrescente
      while(num1 > num2){
        res.innerHTML += ` ${num1} \u{1F449} `;      
        num1 -= salto;                
      }
    }
    res.innerHTML += `\u{1F3C1} `;                  
  }  
}


