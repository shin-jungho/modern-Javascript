// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);

// console.log(user);
// console.log(clone);

let user = {
  name: 'John',
  sizes: {
    height: 182, 
    width: 50
  }
};

let clone = Object.assign({}, user);
console.log( user.sizes === clone.sizes);
user.sizes.height++;
console.log(clone.sizes.height);