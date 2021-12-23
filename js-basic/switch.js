// #1
if (browser == 'Edge') {
  console.log('Edge를 사용하고 계시네요!')
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.')
} else {
  console.log('현재 페이지가 괜찮아 보이길 바랍니다.')
}


// #2

let a = +prompt('a?', '');

switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log('2, 3');
}