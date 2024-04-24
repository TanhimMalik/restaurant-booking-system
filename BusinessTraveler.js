class BusinessTraveler extends Traveler {
    constructor(name,company,origin,destination) {
        super(name,origin,destination); // Calls the parent class constructor
        this.company = company;
    }

    travelDetails() {
        return `${super.travelDetails()} They are traveling for business with ${this.company}.`;
    }
}


module.exports=BusinessTraveler;