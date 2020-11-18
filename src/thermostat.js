'use strict';

// object constructor function - enables us to make instances of the Thermostat object by running: new Thermostat()
class Thermostat { // the properties of our Thermostat object are held in the {}
  constructor() { // we give our object a property that 'holds' the current temperature
    this.temperature = 20; // 'this' tells us that temperature belongs to the object Thermostat
  }
  getCurrentTemperature() {
    return this.temperature;
  }
}
