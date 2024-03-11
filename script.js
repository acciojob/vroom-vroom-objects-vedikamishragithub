class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;

    }
    getMakeModel(){
        return `${this.make} ${this.model}`;
    }
}

class SportsCar extends Car{
    constructor(make, model, topSpeed){
        super(make,model);
        this.topSpeed=topSpeed;
    }
    getTopSpeed()
    {
        return this.topSpeed;
    }
}
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
