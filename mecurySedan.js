//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class MercurySudan extends VehicleModule {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
    }

    loadPassenger (num) {
        if (num < this.maximumPassengers) {
            
        }
    }

    start () {
        this.start = true
    }

    scheduleService (mileage) {
        if (mileage > 30000) {
            
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)