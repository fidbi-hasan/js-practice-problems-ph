// check if a name contains a number or not

function checkDigitsInName(name) {
  if (typeof name !== 'string') return 'invalid input!';

  let isContainsNumber = false;

  for (char of name) {
    if (isNaN(char) === false) {
      isContainsNumber = true;
      break;

    } else {
      isContainsNumber = false;
    }
  }

  return isContainsNumber;
}

const nameInput = 'fidbi25hasan';

const isContainsNumber = checkDigitsInName(nameInput);

console.log(isContainsNumber);
