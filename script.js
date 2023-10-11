// Завдання №2

// const Year = new Date().getFullYear();

// const calculateAge = (name, birthYear) => {
  
//   name = prompt('Введіть ваше ім`я:')
//   birthYear = prompt('Введіть ваш рік народження:')

//   const age = Year - birthYear;
  
//   return alert(`Я ${name}, мені ${age} років`);
// };

// calculateAge();





// Завдання №3

// class Human {
//     constructor(name, age, weight, gender) {
//       this.name = name;
//       this.age = age;
//       this.weight = weight;
//       this.gender = gender;
//     }
  
//     displayInfo() {
//       console.log(`Ім'я: ${this.name}`);
//       console.log(`Вік: ${this.age} років`);
//       console.log(`Вага: ${this.weight} кг`);
//       console.log(`Стать: ${this.gender}`);
//     }
//   }
  
//   const person1 = new Human("Петро", 30, 75, "чоловік");
  
//   person1.displayInfo();
  





// Завдання №4

// class Human {
//     constructor(name, age, weight, gender) {
//       this.name = name;
//       this.age = age;
//       this.weight = weight;
//       this.gender = gender;
//     }
  
//     displayInfo() {
//       console.log(`Ім'я: ${this.name}`);
//       console.log(`Вік: ${this.age} років`);
//       console.log(`Вага: ${this.weight} кг`);
//       console.log(`Стать: ${this.gender}`);
//     }
  
//     getInfo(prop) {
//       if (prop === null) {
//         return {
//           name: this.name,
//           age: this.age,
//           weight: this.weight,
//           gender: this.gender,
//         };
//       } else if (this.hasOwnProperty(prop)) {
//         return this[prop];
//       } else {
//         return null;
//       }
//     }
  
//     greeting() {
//       return "Hi!";
//     }
//   }
  
//   const person1 = new Human("Петро", 30, 75, "чоловік");

//   person1.displayInfo();
//   console.log(person1.getInfo("weight"));
//   console.log(person1.getInfo(null));
//   console.log(person1.getInfo("hairColor"));
//   console.log(person1.greeting());
    





// Завдання №5

// class Human {
//     constructor(name, age, weight, gender) {
//       this.name = name;
//       this.age = age;
//       this.weight = weight;
//       this.gender = gender;
//     }
//   }
  
//   class Man extends Human {
//     constructor(name, age, weight) {
//       super(name, age, weight, "man");
//     }
  
//     greeting() {
//       return `Привіт, я ${this.name}, мені ${this.age} років.`;
//     }
//   }
  
//   class Woman extends Human {
//     constructor(name, age, weight) {
//       super(name, age, weight, "woman");
//     }
  
//     greeting() {
//       return `Привіт, я ${this.name}.`;
//     }
//   }
  
//   const man1 = new Man("Петро", 30, 75);
//   const woman1 = new Woman("Марія", 25, 60);
  
//   console.log(man1.greeting());  
//   console.log(woman1.greeting());

  



// Завдання №6


//   class Human {
//     constructor(name, age, weight, gender) {
//       this.name = name;
//       this.age = age;
//       this.weight = weight;
//       this.gender = gender;
//     }
//   }
  
//   class Man extends Human {
//     constructor(name, age, weight) {
//       super(name, age, weight, "man");
//     }
  
//     greeting() {
//       return `Привіт, я ${this.name}, мені ${this.age} років.`;
//     }
//   }
  
//   class Woman extends Human {
//     constructor(name, age, weight) {
//       super(name, age, weight, "woman");
//     }
  
//     greeting() {
//       return `Привіт, я ${this.name}.`;
//     }
//   }
  
//   const people = [
//     new Man("Петро", 30, 75),
//     new Woman("Марія", 25, 60),
//     new Man("Іван", 35, 80),
//     new Woman("Анна", 28, 55),
//     new Man("Максим", 40, 90),
//     new Woman("Інна", 22, 50),
//     new Man("Давид", 27, 70),
//     new Woman("Кіра", 29, 58),
//     new Man("Євген", 33, 78),
//     new Woman("Аліна", 26, 63),
//     new Man("Микола", 32, 85),
//     new Woman("Віка", 24, 57),
//     new Man("Олександр", 38, 88),
//     new Woman("Каріна", 23, 52),
//     new Man("Андрій", 31, 72),
//   ];
  
//   console.log(people);
  





  // Завдання №7


// const searchDelay = 1000;

// function searchInList(list, searchField, searchValue) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const results = list.filter(item => item[searchField] === searchValue);
//       if (results.length > 0) {
//         resolve(results);
//       } else {
//         reject(`За пошуком по ${searchField}:${searchValue} не знайдено.`);
//       }
//     }, searchDelay);
//   });
// }

// class Human {
//         constructor(name, age, weight, gender) {
//           this.name = name;
//           this.age = age;
//           this.weight = weight;
//           this.gender = gender;
//         }
//     }
// class Man extends Human {
//         constructor(name, age, weight) {
//           super(name, age, weight, "man");
//         }
//     }
// class Woman extends Human {
//     constructor(name, age, weight) {
//         super(name, age, weight, "woman");
//     }
// }        
// const people = [
//     new Man("Петро", 30, 75),
//     new Woman("Марія", 25, 60),
//     new Man("Іван", 35, 80),
//     new Woman("Анна", 28, 55),
//     new Man("Максим", 40, 90),
//     new Woman("Інна", 22, 50),
//     new Man("Давид", 27, 70),
//     new Woman("Кіра", 29, 58),
//     new Man("Євген", 33, 78),
//     new Woman("Аліна", 26, 63),
//     new Man("Микола", 32, 85),
//     new Woman("Віка", 24, 57),
//     new Man("Олександр", 38, 88),
//     new Woman("Каріна", 23, 52),
//     new Man("Андрій", 31, 72),
//   ];

// searchInList(people, "name", "sdfghj")
//   .then(results => {
//     console.log("Результати пошуку:", results);
//   })
//   .catch(error => {
//     console.error("Помилка:", error);
//   });
