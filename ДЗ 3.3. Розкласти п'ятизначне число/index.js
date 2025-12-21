function numberSeparation (){
    let num = '83502'
    let result = ''

    for (let i = 0; i < num.length; i++){
        result += num[i] + ' '
    }
    console.log(result.trim())
}
numberSeparation()