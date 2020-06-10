var numbers = [];
var sum = 0;
var numBigger = 0;
var numSmaller = 0;

function newValue(){    
  var numberTxt = document.getElementById('numTxt');
  var num = Number(numberTxt.value);
  var lista = document.getElementById('flista');
  var find = numbers.indexOf(num);       
  if(num > 100 || num < 1){
    alert('Valor Incorreto!');
  }else if(find != -1){
    alert(`O valor ${num} já foi adicionado`);
    numberTxt.value = '';
  } else{
    numbers.push(num);
    numberTxt.value = '';
    var opt = document.createElement('option');
    opt.text = `Valor ${num} adicionado`;
    lista.appendChild(opt);
  }  
}

function bigger(array){
  numBigger = array[0];  
  for(x=1; x <= array.length; x++){    
    if(numBigger < array[x]) numBigger = array[x];
  }
  return numBigger;
}

function smaller(array){  
    numSmaller = array[0];
    for(x=1; x <= array.length; x++){    
      if(numSmaller > array[x]) numSmaller = array[x];
    }
    return numSmaller;
  }

  function sumNumbers(array){
    for(let pos in array ){
      sum += array[pos];
  } //console.log(sum);
  return sum;
  }

  function results(){
    if(numbers == ''){
      alert('Adicione valores antes de finalizar');
    }else{  
      sumNumbers(numbers);
      smaller(numbers);
      bigger(numbers);
      var avarege = sum / numbers.length;
      var results = document.querySelector('div.texto');
      results.innerHTML = `Ao todo, temos ${numbers.length} números cadastrados.<br>
        O maior valor informado foi ${numBigger}.<br>
        O menor valor informado foi ${numSmaller}.<br>
        Somando todos os valores, temos ${sum}.<br>
        A média dos valores digitados é ${avarege}.      
        `;
      numbers = [];
      sum = 0;
    } 
}