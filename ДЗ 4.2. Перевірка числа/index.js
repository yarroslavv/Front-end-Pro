let num = prompt('Enter a number')

let str = String(num)

let allSame = true

for(let i = 1; i < str.length; i++){
    if(str[i] !== str[0]){
        allSame = false; 
        break;
    } 
}
let someSame = false
for(let t = 0; t < str.length; t++){
    for(let n = t + 1; n < str.length; n++){
        if(str[n] == str[t]){
        someSame = true
        break
}
}
if (someSame) break
}
    
console.log(allSame ? "Всі цифри однакові" : "Всі цифри не однакові");
console.log(someSame ? 'Cеред цифр є цифри однакові' : 'Cеред цифр немає цифр однакових')