const { type } = require('express/lib/response');

// #1
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");
console.log(fruits); // 4, [ '사과', '배', '오렌지', '바나나' ]

// #2

let styles = ['jazz', 'blues'];

let genreStyles = styles;
console.log(genreStyles);
genreStyles.push('rock-n-roll');
console.log(genreStyles);
genreStyles[1] = 'classics';
console.log(genreStyles);
genreStyles.shift();
console.log(genreStyles);
genreStyles.unshift('rap', 'reggae');
console.log(genreStyles);

// #3 

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();
// => ['a', 'b', function() {...}]로 나온다.

// #4

function sumInput() {
  let arrInput = [];
  while (true) {
    let value = prompt('숫자를 입력하세요.', 0);
    if (!isFinite(value) || value == ''|| value == null){ break };

    arrInput.push(+value);
  }

  let sum = 0;
  for (let num of arrInput) {
    sum += num;
  }
  return sum
}

alert( sumInput() );