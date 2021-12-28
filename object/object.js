// // #1
// let user = {};
// user.name = 'john';
// console.log(user.name);

// user.surname = 'Smith';
// console.log(user.name, user.surname);

// user.name = 'Pete' 
// console.log(user.name);

// delete user.name;
// console.log(user.name);

// // #2
// let schedule = {};

// const isEmpty = (obj) => {
//   for (let key in obj){
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(schedule))

// schedule['8:30'] = 'get up';

// console.log(isEmpty(schedule));

// #3

// #4

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;

// const getSum = (salaries) => {
  for (let key in salaries) {
    sum += salaries[key];
  }
  // console.log(salaries);
// }

// console.log(getSum(salaries));
console.log(sum);

// #5 

let menu = {
  width: 200,
  height: 300,
  title: 'my menu'
};

function multiplyNumeric(menu){
  for (let key in menu) {
    if (typeof menu[key] == 'number') {
      menu[key] *= 2;
    }
  }
}

console.log(multiplyNumeric());