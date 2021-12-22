const e = require('express');

// #1 
if('0') {
  console.log('hello');
}

// #2

const value = prompt('자바스크립트의 "공식" 이름은 무엇일까요?', '');
if(value == 'ECMAScript') {
  console.log('correct');
} else {
  console.log('모르셨나요. 정답은 ECMAScript입니다.')
}


// #3

// #4

let result = (a + b < 4) ? result = '미만' : result = '이상';


// #5
let message = (login == '직원') 
            ?  '안녕하세요' : (login == '임원') 
            ?  '환영합니다' : (login == '')
            ?  '로그인이 필요합니다.' : '';