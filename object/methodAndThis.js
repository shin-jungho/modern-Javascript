// #1
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
};

let user = makeUser();

console.log(user.ref.name); // undefined 뜬다 왜냐면 함수로써 호출되었기 때문에 값이 없다.


// #2

let calculator = {
  sum() {
    return this.num1 + this.num2
  },
  mul() {
    return this.num1 * this.num2
  },
  read() {
    this.num1 = +prompt('1번째 숫자 입력', 0);
    this.num2 = +prompt('2번째 숫자 입력', 0);
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
// +를 붙혀주어야 숫자로 변경해서 계산되므로 +무조건 붙혀서 해야된다.

// #3