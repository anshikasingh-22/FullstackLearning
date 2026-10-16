// TASK:

// create a object which has these points:

// -customerName, movieName, ticketPrice, and quantity
const booking = {
    customerName: "Kashish",
    movieName: "Avengers",
    ticketPrice: 200,
    quantity: 3,

// -A nested customer object with email and city 
customer: {
        email: "kashish@gmail.com",
        city: "Mathura"
    },

// -A seats array containing atleast three seat numbers 
 seats: ["A1", "A2", "A3"],

// -A method calculateTotalAmount()
    calculateTotalAmount: function () {
        return this.ticketPrice * this.quantity;
    }
};

// Execute these :

// 1. Print the movieNAme using dot notation.
console.log(booking.movieName);

// 2. Read the customer's city using nested property access.
console.log(booking.customer.city);

// 3. Change the ticket price and a bookingStatus property .
booking.ticketPrice = 250;
booking.bookingStatus = "Confirmed";
console.log(booking.ticketPrice);
console.log(booking.bookingStatus);

// 4. Print all object keysusing Object.keys(). 
console.log(Object.keys(booking));

// 5. Destructure movieName And quantity. 
const { movieName, quantity } = booking;

console.log(movieName);
console.log(quantity);

// 6. Calculate and print the total booking amount. 
console.log(booking.calculateTotalAmount());
