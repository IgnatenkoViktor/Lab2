import Human from './human.js';

export default class Man extends Human {
  constructor(name, age, weight) {
    super(name, age, weight, "man");
  }

  greeting() {
    return `Привіт, я ${this.name}, мені ${this.age} років.`;
  }

  getInfo(prop) {
      if (prop === null) {
        return {
          name: this.name,
          age: this.age,
          weight: this.weight,
          gender: this.gender,
        };
      } else if (this.hasOwnProperty(prop)) {
        return this[prop];
      } else {
        return null;
      }
    }
}
