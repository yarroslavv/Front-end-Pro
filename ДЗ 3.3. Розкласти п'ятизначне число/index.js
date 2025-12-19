function numberSeparation (){
    let num = '83502'
    let result = ''

    // console.log(`${num[0]} ${num[1]} ${num[2]} ${num[3]} ${num[4]}`)

    for (let i = 0; i < num.length; i++){
        result += num[i] + ' '
    }
    console.log(result.trim())
}
numberSeparation()


