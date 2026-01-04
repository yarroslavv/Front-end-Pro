let n = +prompt('Введіть любе ціле число')

let result = ''

let num = ''

for(i = 1; i <= 100; i++){
    num = i * i
    if(num > n){
        break;
    }
    result += i + ' '
}console.log(result)