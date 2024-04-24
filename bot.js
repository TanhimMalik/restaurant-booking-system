const prompt = require('prompt-sync')();

function simulateBooking() {
    let name = prompt('Enter your name: ');
    let type = prompt('Choose restaurant type (Fine Dining / Casual): ');
    let date = prompt('Enter booking date: ');
    let time = prompt('Enter booking time: ');
    let guests = prompt('Enter number of guests: ');

    let restaurant = type === "Fine Dining" ? new FineDining("La Table", "123 Boulevard", "French", "Formal") : new Restaurant("Joe's Diner", "456 Main St", "American");
    let booking = new Booking(name, date, time, guests);

    restaurant.describe();
    booking.bookingDetails();
}

simulateBooking();

module.exports=simulateBooking;