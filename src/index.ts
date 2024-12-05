import { map, interval, filter } from "rxjs";

interface Car {
  name: string;
  model: string;
  yearOfRelease: number;
  brand: string;
  color: string;
}

interface Scrap {
  brand: string;
  yearOfRelease: number;
}

function getRandomCars(): Car {
  // Dummy data for returning random car object
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
  //   -------end of dummy data-------------

  // function to get random value from an array of particular property
  function getRandomValue<T>(array: T[]): T {
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
const observable1 = interval(1000).pipe(map(() => getRandomCars()));

// 0bservable 2 -->
const observable2 = observable1.pipe(
  filter((car: Car) => car.color === "Black" && car.yearOfRelease < 2020)
);

// observable 3 -->
const observable3 = observable1.pipe(
  map(
    (car: Car): Scrap => ({
      brand: car.brand,
      yearOfRelease: car.yearOfRelease,
    })
  )
);

observable1.subscribe((car) => console.log("Car with no filter: ", car));
observable2.subscribe((car) => console.log("Car with color black: ", car));
observable3.subscribe((car) =>
  console.log("Car with the Scrap interface: ", car)
);
