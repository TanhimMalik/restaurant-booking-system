// - **Task 3**: Create a `Traveler` class with properties like `name`, 
// `origin`, and `destination`, and a method to display traveler details.


class Traveler{
    constructor(name,origin,destination){
        this.name=name;
        this.origin=origin;
        this.destination=destination
    }

    travelerDetails(){

        return `The flight ticket showed that the passenger ${this.name} would travel from ${origin} to ${destination}.`
    }
}

module.exports=Traveler;