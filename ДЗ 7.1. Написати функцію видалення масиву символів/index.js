function deleteSymbols(string, array){
let result = ''
    for(i = 0; i < string.length; i++){
         if(!array.includes(string[i].toLowerCase()) ){
            result += string[i]
         }
        
    }
    return result
}
console.log(deleteSymbols('How are you?', ['o', 'e']))