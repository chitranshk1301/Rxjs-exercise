"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function getRandomCars() {
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
    function getRandomValue(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    return {
        names: getRandomValue(names),
        models: getRandomValue(models),
        yearsOfRelease: getRandomValue(yearsOfRelease),
        brands: getRandomValue(brands),
        colors: getRandomValue(colors),
    };
}
const observable1 = (0, rxjs_1.interval)(2000).pipe((0, rxjs_1.map)(() => getRandomCars()));
observable1.subscribe((car) => console.log(car));
