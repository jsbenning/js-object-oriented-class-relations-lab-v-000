let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++ driverId;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers(){
    
  }
}

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++ passengerId;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }
}

class Trip {
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++ tripId;
    store.trips.push(this);
  }
  driver(){
    
  }
}