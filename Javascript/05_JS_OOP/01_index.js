class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }

}

class Student extends Person{
    constructor(name, age, branch){
        super(name, age);
 }
}

const s1= nwe Student("User3CB",24."CSE")
