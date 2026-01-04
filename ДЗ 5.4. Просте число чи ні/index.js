let num = +prompt('Введіть любе ціле число')

let primeNumber = true

for(i = 2; i < num; i++){
    if(num % i === 0){
        primeNumber = false;
        break;
    }
}console.log(primeNumber ? 'Число просте' : 'Число не просте')