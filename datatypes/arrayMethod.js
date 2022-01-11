// // #1

// function camelize(str) {
//   return str
//   .split('-')
//   .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//   .join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// // #2 

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];

//     if(value < a || value >b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 5);
// console.log( arr );

// // #3
// let arr = [5, 2, 1, -10, 8];

// // arr.sort().reverse();
// arr.sort((a, b) => b - a);
// console.log(arr);

// // #4
// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr );

// // #5 ???????
// function Calculator() {

// }

// // #6 

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);

// console.log( names );

// // #7 
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName : `${user.name} ${user.surname}`,
//   id : user.id
// }));

// console.log(usersMapped);
// console.log( usersMapped[0].id );
// console.log(usersMapped[0].fullName);

// #8

// #9

function getAverageAge(users) {

}

// #10 
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O