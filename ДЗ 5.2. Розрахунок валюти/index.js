let dollarValue = 26

result = ''

for(i = 10; i <= 100;){
    result += dollarValue * i + ' ';
    i += 10;
}
console.log(result)