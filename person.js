class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
     introduction() {
        return `Hi, I'm ${this.name} ${this.age}, from ${this.country}`
    }
}

console.log(`Hey, meet ${this.name}, he is a from ${this.country}`);

module.exports = Person;