// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     showInfo(){
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }

// }

// class Student extends Person{
//     constructor(name, age, branch){
//         super(name, age);
//  }
// }

// const s1= new Student("User3CB",24,"CSE")
   
class BankAccount{
    #balance

    constructor(accountholder, initialAmount){
        this.accountholder=accountholder;
        this.#balance=initialAmount
    }
    deposit(amount){
        this.#balance+=amount
    }
    withdrawl(amount){
        this.#balance-=amount
    }
    getBalance(){
        console.log(`${this.accountholder} has balance:${this.#balance}`)
    }
}