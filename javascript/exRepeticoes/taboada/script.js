
function contar(){
  var numN = document.querySelector('input#txtN');    
  var res = document.getElementById('tab');  
  var num = Number(numN.value);    
  if(num == ''){
    alert('Favor insira o número desejado!')
  }else{
    tab.innerHTML = '';
    for(x=1; x<=10; x++){    
      let item = document.createElement('option');
      item.text = `${num} x ${x} = ${num*x}`;
      item.value = `tab${x}`;
      res.appendChild(item);
    }  
  }
  numN.value = '';   
}