let birthYear = prompt('Enter your birth year')

let city = prompt('What city do you live in?')

let sport = prompt('What is your favourite sport?')

let age = 2025 - birthYear

if(birthYear === null){
    alert(`It's a shame you didn't want to enter your birthYear`)
}else if(city === null){
    alert(`It's a shame you didn't want to enter your city`)
}else if(sport === null){
    alert(`It's a shame you didn't want to enter your favourite sport`)
}else if(city === 'Kyiv'){
    if(sport === 'Football'){
        alert(`You are ${age} years old.
You are living in the capital of Ukraine.
Cool! Do you want to become Lionel Messi?`)
    }else if(sport === 'Weight training'){
        alert(`You are ${age} years old.
    You are living in the capital of Ukraine.
    Cool! Do you want to become Ronnie Coleman?`)
    }else if(sport === 'Basketball'){
        alert(`You are ${age} years old.
You are living in the capital of Ukraine.
Cool! Do you want to become Michael Jordan`)
    }else{
      alert(`You are ${age} years old.
You are living in the capital of Ukraine.
Your favourite sport is ${sport}`)  
    }
}else if(city === 'London'){
    if(sport === 'Football'){
        alert(`You are ${age} years old.
You are living in the capital of Great Britain.
Cool! Do you want to become Lionel Messi?`)
    }else if(sport === 'Weight training'){
        alert(`You are ${age} years old.
You are living in the capital of Great Britain.
Cool! Do you want to become Ronnie Coleman?`)
    }else if(sport === 'Basketball'){
        alert(`You are ${age} years old.
You are living in the capital of Great Britain.
Cool! Do you want to become Michael Jordan`)
    }else{
    alert(`You are ${age} years old.
You are living in the capital of Great Britain.
Your favourite sport is ${sport}`)
    }
}else if(city === 'Washington'){
    if(sport === 'Football'){
        alert(`You are ${age} years old.
You are living in the capital of USA.
Cool! Do you want to become Lionel Messi?`)
    }else if(sport === 'Weight training'){
        alert(`You are ${age} years old.
You are living in the capital of USA.
Cool! Do you want to become Ronnie Coleman?`)
    }else if(sport === 'Basketball'){
        alert(`You are ${age} years old.
You are living in the capital of USA.
Cool! Do you want to become Michael Jordan`)
    }else{
    alert(`You are ${age} years old.
You are living in the capital of USA.
Your favourite sport is ${sport}`)
    }
}else if(sport === 'Football'){
    alert(`You are ${age} years old.
You are living in ${city}.
Cool! Do you want to become Lionel Messi?`)
}else if(sport === 'Weight training'){
        alert(`You are ${age} years old.
You are living in ${city}.
Cool! Do you want to become Ronnie Coleman?`)
}else if(sport === 'Basketball'){
        alert(`You are ${age} years old.
You are living in ${city}.
Cool! Do you want to become Michael Jordan`)
    }else{
        alert(`You are ${age} years old.
You are living in ${city}.
Your favourite sport is ${sport}`)
    }