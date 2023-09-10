function Person (name, surname, age, birthYear, serialPassport) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.birthYear = birthYear;
    this.serialPassport = serialPassport;
}
let mikhail = new Person('Mikhail', 'Olegovich', 33, 1990, 2210);
console.log(mikhail);
    for (let key in mikhail) {
        if (mikhail.hasOwnProperty(key)) {
            console.log(key)
            console.log(mikhail[key])
        }
}
