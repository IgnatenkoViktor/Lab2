import { searchInList } from './search.js';
import Man from './man.js';
import Woman from './woman.js';

const people = [
    new Man("Петро", 30, 75),
    new Woman("Марія", 25, 60),
    new Man("Іван", 35, 80),
    new Woman("Анна", 28, 55),
    new Man("Максим", 40, 90),
    new Woman("Інна", 22, 50),
    new Man("Давид", 27, 70),
    new Woman("Кіра", 29, 58),
    new Man("Євген", 33, 78),
    new Woman("Аліна", 26, 63),
    new Man("Микола", 32, 85),
    new Woman("Віка", 24, 57),
    new Man("Олександр", 38, 88),
    new Woman("Каріна", 23, 52),
    new Man("Андрій", 31, 72),
];

searchInList(people, "name", "Петро")
  .then(results => {
    console.log("Пошук за name:Петро:", results);
    results.forEach(person => {
      console.log(person.greeting());
      console.log(person.getInfo("gender"));
    });
  })
  .catch(error => {
    console.error("Помилка:", error);
  });


searchInList(people, "name", "Марія")
  .then(results => {
    console.log("Пошук за name:Марія:", results);
    results.forEach(person => {
      console.log(person.greeting());
      console.log(person.getInfo("gender"));
    });
  })
  .catch(error => {
    console.error("Помилка:", error);
  });
