const person1={
    userName:"user_123",
    email:"user@gmail.com",
    age:20,
    subscriptions:{
        netflix:"Gold",
        amazonPrime:"basic"
    }
}



person1.address="Lucknow"
console.log(person1["email"])

delete person1.userName

console.log(person1)
