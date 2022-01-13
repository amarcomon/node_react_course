const Person = require("./Person");

const retArr = () => {
  let pArr = [];
  let arra = ["pepe", "paco", "perico", "pablito"];
  let arrb = [
    "pepe@gmail.com",
    "paco@gmail.com",
    "perico@gmail.com",
    "pablito@gmail.com",
  ];

  for (let i = 0; i < arra.length; i++) {
    let per = new Person(arra[i], arrb[i]);
    pArr.push(per);
  }
  return pArr;
};

module.exports = retArr
