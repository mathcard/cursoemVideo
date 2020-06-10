let num = [2, 4, 7, 3, 9];
num[0] = 1;
num.push(8);
console.log(num);
console.log(`Tamanho: ${num.length}`);
console.log(num.sort());

/*
for(x=0; x<num.length; x++){
  console.log(`Posição ${x}: ${num[x]}`);
}*/

for(let pos in num ){
  console.log(`Posição ${pos}: ${num[pos]}`);
}

let find = num.indexOf(88); // Pesquisando se o valor existe no vetor e devolvendo a posição
console.log(find)



