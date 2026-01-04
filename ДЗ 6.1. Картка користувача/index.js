const userCard = {
    name: 'Andriy',
    age: 30,
    city: 'Kyiv',
    showData () {
        for(const key in userCard){
        console.log(`Key: ${key}, Value: ${userCard[key]}`)
    }
}
}
userCard.showData()