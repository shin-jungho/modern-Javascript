// #1
// const num1 = +prompt('1번째 수 입력:', 0);
// const num2 = +prompt('2번째 수 입력:', 0);

// alert(num1 + num2);

// #2

console.log(6.35.toFixed(2))

// #3 

function readNumber() {
  let num;

  do {
    num = prompt('숫자 입력', 0);
  } while( !isFinite(num) );

  if (num == ' ' || num == null) return null

  return +num
}

alert(`result: ${readNumber()}`);

// #4 이 루프가 무한인 이유는? i가 정확히 10으로 떨어지지 않기 때문이다.

let i = 0;
while (i != 10) {
  i += 0.2;
}

// #5
