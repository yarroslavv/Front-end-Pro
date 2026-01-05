const userCard = {
    name: 'Andriy',
    age: 31,
    city: 'Kyiv',
    showData () {
        console.log(`Имя: ${userCard.name}, Возраст: ${userCard.age}, Город проживания: ${userCard.city}`)
}
}
userCard.showData()