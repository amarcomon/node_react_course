class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
}

// exportar varias clases en un mismo archivo

module.exports = {
    MyPerson: Person,
    MyCar: Car
}
