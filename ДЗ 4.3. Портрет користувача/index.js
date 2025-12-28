let birthYear = prompt('Enter your birth year')

let city = prompt('What city do you live in?')

let sport = prompt('What is your favourite sport?')

let age = 2025 - birthYear

const capitals = {Kyiv: "the capital of Ukraine", 
    London: "the capital of Great Britain", 
    Washington: "the capital of USA"};

const sportHeroes = { Football: "Lionel Messi", 
    "Weight training": "Ronnie Coleman", 
    Basketball: "Michael Jordan" }

let message = `You are ${age} years old.
You are living in ${capitals[city] || city}.`

if(birthYear === null){
    message = `It's a shame you didn't want to enter your birthYear`
}else if(city === null){
    message = `It's a shame you didn't want to enter your city`
}else if(sport === null){
    message = `It's a shame you didn't want to enter your favourite sport`
}else if(sportHeroes[sport]) {
    message += `
Cool! Do you want to become ${sportHeroes[sport]}?`;
}else{
    message += `
Your favourite sport is ${sport}.`
}
alert(message)