// - **Task 2**: Create a `Booking` class with properties including `customerName`, `date`, 
// `time`, and `numberOfGuests`, and methods like `bookingDetails()` that outputs reservation details.



class Booking{
    constructor(customerName,date,time,numberOfGuest){
        this.customerName=customerName;
        this.date=date;
        this.time=time;
        this.numberOfGuest=numberOfGuest;

    }

    bookingDetails(){
        
        return `The reservation system automatically confirmed that ${customerName} booked a table for ${numberOfGuest} on ${date} at ${time}.`

    }
}

module.exports=Booking;