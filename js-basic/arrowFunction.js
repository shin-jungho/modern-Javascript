// #1

let ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
}

ask (
  'agree?',
  () => alert('agree'),
  () => alert('cancel')
);