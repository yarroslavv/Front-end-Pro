function num(){
    let sumNum = 0
function sum(val){
    sumNum += val
    return sumNum
}
return sum
}

const sum = num()

console.log(sum(5))

console.log(sum(8))