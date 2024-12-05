"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function getRandomCars() {
    // Dummy data for returning random car object
    const names = ["Civic", "Model S", "Mustang", "Camry", "Accord"];
    const models = [
        "Sedan",
        "SUV",
        "Convertible",
        "Hatchback",
        "Coupe",
    ];
    const yearsOfRelease = [2020, 2021, 2019, 2022, 2018];
    const brands = ["Honda", "Tesla", "Ford", "Toyota", "Chevrolet"];
    const colors = ["Red", "Black", "Blue", "White", "Silver"];
    //   -------end of dummy data-------------
    // function to get random value from an array of particular property
    function getRandomValue(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    return {
        name: getRandomValue(names),
        model: getRandomValue(models),
        yearOfRelease: getRandomValue(yearsOfRelease),
        brand: getRandomValue(brands),
        color: getRandomValue(colors),
    };
}
// observable 1 --> which emits a new car every Interval of 1s
const observable1 = (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.map)(() => getRandomCars()));
// 0bservable 2 -->
const observable2 = observable1.pipe((0, rxjs_1.filter)((car) => car.color === "Black" && car.yearOfRelease < 2020));
// observable 3 -->
const observable3 = observable1.pipe((0, rxjs_1.map)((car) => ({
    brand: car.brand,
    yearOfRelease: car.yearOfRelease,
})));
observable1.subscribe((car) => console.log("Car with no filter: ", car));
observable2.subscribe((car) => console.log("Car with color black: ", car));
observable3.subscribe((car) => console.log("Car with the Scrap interface: ", car));
