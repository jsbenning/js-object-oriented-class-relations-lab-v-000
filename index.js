let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++ driverId;
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(function(trip){
      trip.driverId == this.id;
  );
//   //   }
//   // }
// }

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++ passengerId;
    store.passengers.push(this);
  }
}

class Trip {
  constructor(driver, passenger){
    this.driver = driver;
    this.passenger = passenger;
    this.id = ++ tripId;
    store.trips.push(this);
  }
//   setDriver(driver){
//     this.driverId = driver.id;
//   }
//   setPassenger(passenger){
//     this .assengerId = passenger.id;
//   }

}