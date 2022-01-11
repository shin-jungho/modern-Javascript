// let str = "Hello";

// for (let char of str) { console.log(char) };

// console.log();
// // for..of를 사용한 것과 동일한 작업을 합니다.

// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value); // 글자가 하나씩 출력됩니다.
// }

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop());