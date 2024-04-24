class EventBooking extends Booking{
    constructor(customerName,date,time,numberOfGuest,eventType){
        super(customerName,date,time,numberOfGuest)
        this.eventType=eventType
        
    }

    bookingDetails(){

        return `Please confirm your booking for a ${this.eventType}} celebration in honor of ${this.customerName}`

    }
}

module.exports=EventBooking;