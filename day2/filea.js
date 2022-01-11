const p1 = async () => {
  return "first promise";
};

const p2 = async () => {
  return "second promise";
};

const p3 = async () => {
  return "third promise";
};

const pro1 = new Promise((resolve, reject) => {
  resolve(p1());
});

const pro2 = new Promise((resolve, reject) => {
  resolve(p2());
});
const pro3 = new Promise((resolve, reject) => {
  resolve(p3());
});
const promArray = [pro1, pro2, pro3];

Promise.all(promArray).then(r => console.table(r))
//promArray.forEach((p) => console.log(p));
