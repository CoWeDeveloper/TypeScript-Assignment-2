abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = false;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.rented) {
        console.log("This vehicle is already rented.");
      } else {
        this.rented = true;
        console.log("Thank you for renting this vehicle.");
      }
    }
  
    return(): void {
      if (!this.rented) {
        console.log("This vehicle has not been rented yet.");
      } else {
        this.rented = false;
        console.log("Thank you for returning this vehicle.");
      }
    }
  }
  
  class Car extends Vehicle {
    private numSeats: number;
  
    constructor(make: string, model: string, year: number, numSeats: number) {
      super(make, model, year);
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    getNumSeats(): number {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    private maxLoad: number;
  
    constructor(make: string, model: string, year: number, maxLoad: number) {
      super(make, model, year);
      this.maxLoad = maxLoad;
    }
  
    rentalRate(): number {
      return 100;
    }
  
    getMaxLoad(): number {
      return this.maxLoad;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, engineSize: number) {
      super(make, model, year);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 30;
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  }
  
  // Example usage:
  
  const car = new Car("Honda", "Civic", 2020, 5);
  console.log(car.getMake()); // Honda
  console.log(car.getModel()); // Civic
  console.log(car.getYear()); // 2020
  console.log(car.getNumSeats()); // 5
  console.log(car.rentalRate()); // 50
  car.rent(); // Thank you for renting this vehicle.
  console.log(car.isRented()); // true
  car.return(); // Thank you for returning this vehicle.
  console.log(car.isRented()); // false
  
  const truck = new Truck("Ford", "F-150", 2021, 2000);
  console.log(truck.getMake()); // Ford
  console.log(truck.getModel()); // F-150
  console.log(truck.getYear()); // 2021
  console.log(truck.getMaxLoad()); // 2000
  console.log(truck.rentalRate()); // 100
  truck.rent(); // Thank you for renting this vehicle.
  console.log(truck.isRented()); // true
  truck.return(); // Thank you for returning this vehicle.
  console.log(truck.isRented()); // false
  
 