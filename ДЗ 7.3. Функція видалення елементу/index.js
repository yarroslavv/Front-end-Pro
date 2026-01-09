function removeElement(array, item){
    let index = array.indexOf(item)

    array.splice(index, 1);

    console.log(array)
}
removeElement([7, 3, 'a', true, 9, 'b'], 3)