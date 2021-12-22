if (-1 || 0) console.log('frist');
if (-1 && 0) console.log('second');
if(null || -1 && 1) console.log('third');


// 로그인 구현 assignment

let userName = prompt('사용자이름을 눌러주세요.', '');

if(userName == 'Admin') {
  let password = prompt('비밀번호를 입력해주세요', '');

  if (password == 'TheMaster') {
    alert('환영합니다.');
  } else if (password == '' || password == null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패');
  }

} else if (userName == '' || userName == null) {
  alert('취소되었습니다.');
} else {
  alert('인증되지 않는 사용자');
}

