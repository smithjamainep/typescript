// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometerToTheMoon = 384400;
var milesperKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesperKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`)
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesperKilometer;
    var hoursToLocation = milesAway / speedMph;
    return hoursToLocation / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("".concat(spacecraftName, " would take ").concat(getDaysToLocation(kilometersToMars), " days to get to Mars."));
console.log("".concat(spacecraftName, " would take ").concat(getDaysToLocation(kilometerToTheMoon), " days to get to Mars."));
// Part 4: Create a Spacecraft Class
// class Spacecraft {
//     milesPerKilometer: number = 0.621;
//     name: string;
//     speedMph: number;
//     Constructor 
//     this.name = name;
//     this.speedMPH = speedMph;
// }
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
// const milesToMars: number = kilometerstoMars * milesperKilometer
// const hourstoMars: number = milesToMars / speedMph
// const daystoMars: number = hourstoMars / 24
