// #2 
let i = 0;
while (++i < 5) console.log(i); // 1 ~ 4 까지 출력

while (i++ < 5) console.log(i); // 1 ~ 5 까지 출력

console.log(''); // 빈칸 띄우긴
// #3

for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);

console.log('');
// #4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) console.log(i)
}

// #5
let i = 0;
while (i < 3) {
  console.log(`number ${i}`);
  i++;
}

// #6 

let inputNum;

do {
  inputNum = prompt('100초과하는 숫자 입력', '');
} while (inputNum && inputNum <= 100);

// #7
let n = 10;

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue
  }
  console.log(i);
}

