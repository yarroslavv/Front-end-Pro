let contactBook = {
    contacts: [{name: 'Петро',
    phoneNumber: '+1 (555) 123-4567',
    emailAdress: 'petro@gmail.com'},
    {name: 'Олександр',
    phoneNumber: '+1 (555) 987-6543',
    emailAdress: 'oleksandr@gmail.com'},
    {name: 'Михайло',
    phoneNumber: '+1 (555) 246-8101',
    emailAdress: 'mykhailo@gmail.com'}],
    findContact(){
        let contactName = prompt("Введіть імя контакту")
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name.toLowerCase().includes(contactName.toLowerCase())) {
                return this.contacts[i];
            }
        }
        return "Контакт не знайдено";
    },
    addContact(name, phoneNumber, emailAdress){
        let obj = {
            name: name,
            phoneNumber: phoneNumber,
            emailAdress: emailAdress
        }
        this.contacts.push(obj)
    }
}
console.log(contactBook.findContact());
contactBook.addContact('Максим', '+1 (555) 246-8301', 'maksym@gmail.com')