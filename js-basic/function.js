// #2 - 1

function checkAge(age) {
 return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}
console.log(checkAge(16));

// #2 - 2 

function checkAge(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

// #3

function min (a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else if (a == b) {
    return a;
  }
}

console.log(min (2, 5));
console.log(min (3, -1));
console.log(min (1, 1));

// #4

function pow (x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;  // 여기서 return 하면 그냥 곱하기로 된다.
  }
  return result;
}

let x = prompt('x:', '');
let n = prompt('n:', '');

if (n < 1) {
  console.log('1이상 자연수를 입력해주세요.');
} else {
  console.log(pow(x, n));
}