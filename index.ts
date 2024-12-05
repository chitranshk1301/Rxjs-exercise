import { map, interval } from "rxjs";

interface Car {
  name: string;
  model: string;
  yearOfRelease: number;
  brand: string;
  color: string;
}

function getRandomCars() {
  const names: string[] = ["Civic", "Model S", "Mustang", "Camry", "Accord"];
  const models: string[] = [
    "Sedan",
    "SUV",
    "Convertible",
    "Hatchback",
    "Coupe",
  ];
  const yearsOfRelease: number[] = [2020, 2021, 2019, 2022, 2018];
  const brands: string[] = ["Honda", "Tesla", "Ford", "Toyota", "Chevrolet"];
  const colors: string[] = ["Red", "Black", "Blue", "White", "Silver"];

  function getRandomValue<T>(array: T[]): T {
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

const observable1 = interval(2000).pipe(map(() => getRandomCars()));

observable1.subscribe((car) => console.log(car));
