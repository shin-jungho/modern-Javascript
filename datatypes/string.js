// // #1

// function ucFirst(str) {
//   if (!str) return str

//   let newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr
// }

// alert(ucFirst('john'))

// js에서는 첫 글자만 바꾸는 것 불가 따라서 첫 글자를 대문자로 바꾼 후 나머지 문자를 붙혀야 된다.

// #2

function checkSpam(str) {
  let nomStr = str.toLowerCase();
  
  return nomStr.includes('viagra') || nomStr.includes('xxx')
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// 대문자로 하면안된다. 왜냐면 ViAgRA때문에 false가 뜨기 때문

// #3

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...'
  } else {
    return str
  }
}
console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20));

// #4

function extractCurrencyValue(str) {
  return +str.slice(1)
}

console.log(extractCurrencyValue('$120'));