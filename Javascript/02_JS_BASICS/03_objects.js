const person1={
    userName:"user_123",
    email:"user@gmail.com",
    age:20,
    subscriptions:{
        netflix:"Gold",
        amazonPrime:"basic"
    },
    show: function showDetails(){
        console.log("this is user :"+ this.userName +"age is :"+ this.age )
    }
}


const person2={
    userName:"user_999",
    email:"user@gmail.com",
    age:30,
    subscriptions:{
        netflix:"Gold",
        amazonPrime:"basic"
    },
    show: function showDetails(){
        console.log("this is user :"+ this.userName +"age is :"+ this.age )
        return this.age
    }
}


console.log(person1.show())
const userInfo= person2.show()
console.log("this is person2 info:",userInfo)



person1.address="Lucknow"
console.log(person1["email"])

delete person1.userName

console.log(person1)


//object is destructuring

const {userName, age, email}= person1

console.log(userName)
console.log(age)
console.log(email)