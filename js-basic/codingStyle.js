function pow (x, n) {
  let result = 1;

  for(let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt('x:', '');
let n = prompt('n:', '');

if (n <= 0) {
  console.log(`Power ${n} is not supported, 
    please enter an integer number greater then zero`);
} else {
  console.log(pow(x, n));
}