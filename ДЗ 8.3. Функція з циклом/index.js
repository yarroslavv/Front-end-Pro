function cycle (){
    let moreThanHundred
    for(i = 1; i <= 10; i++){
moreThanHundred = prompt("Введіть число більше 100")
if (isNaN(moreThanHundred) || moreThanHundred === null) {
      break;
}
moreThanHundred = Number(moreThanHundred);
if (moreThanHundred < 100){
    alert('Ви ввели число меньше 100. Спробуйте ще раз!');
    continue;
}
if (moreThanHundred > 100) {
            break;
}
}
console.log("Останнє введення:", moreThanHundred);
}
cycle()