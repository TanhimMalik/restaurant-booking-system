// - **Task 5**: Extend the `Booking` class to create `GroupBooking` and `EventBooking`, adding properties like `groupSize` or 
// `eventType`, with methods that override or extend the base class functionalities.



class GroupBooking extends Booking{
    constructor(customerName,date,time,numberOfGuest,groupSize){
        super(customerName,date,time,numberOfGuest)
        this.groupSize=groupSize;
        
    }

    bookingDetails(){

        return `We have prepared special accommodations for a ${groupSize} of fifty guests."`

    }
}

module.exports=GroupBooking;