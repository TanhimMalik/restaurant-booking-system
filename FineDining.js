class FineDining extends Restaurant {
    constructor(name, address, cuisineType, dressCode) {
        super(name, address, cuisineType);
        this.dressCode = dressCode;
    }

    describe() {
        super.describe();
        console.log(`Dress code is ${this.dressCode}.`);
    }
}

module.exports = FineDining;