// #1 
let obj = {};
function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;
 
console.log(a == b);

// 이유 : return 하면 두 함수가 this 대신 obj객체를 반환하기 때문에 true예시를 들 수 있다.

// #2
function Calculator() {
  this.read = function() {
    this.num1 = +prompt('1번째 값: ', 0);
    this.num2 = +prompt('2번째 값: ', 0);
  }
  this.sum = function() {
    return this.num1 + this.num2;
  }
  this.mul = function() {
    return this.num1 * this.num2;
  }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// #3

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('더할 숫자:', 0);
  };
}

let accumulator = new Accumulator(1); // 최초값: 1

console.log(accumulator.read()); // 사용자가 입력한 값을 더해줌
console.log(accumulator.read()); // 사용자가 입력한 값을 더해줌
console.log(accumulator.value);
alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함